import React, { useContext, useEffect, useState } from 'react'
import { LocalFireDepartmentRounded, ShareRounded, LightModeRounded, MapRounded} from '@mui/icons-material'
import MainBox, { Button, HeadBox, IconWrap, Span, Time, Stack} from './components'
import { Typography } from '@mui/material';
import { ActiveFireMarker, HotspotMarker } from '../Markers';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { loadAddress } from './helpers';
import withModal from '@contexts/ProvideModal';
import { useMediaQuery } from 'react-responsive'
import { withMaker } from '@contexts/ProvideMarker';
const api_key = import.meta.env.VITE_MAP_API_KEY

function Card(props) {
    //STATE VARIABLES
    const [searchParams, setSearchParams] = useSearchParams()
    const { details } = props
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const { openModal } = useContext(withModal)
    const navigate = useNavigate()
    const [addresses, setAddresses] = useState([])
    const location = useLocation()
    const {
        zoom,
        setZoom,
        ctxLat,
        setCtxLat,
        ctxLng,
        setCtxLng } = useContext(withMaker)

    useEffect(() => {
        const s_param = searchParams.get("latlng")
        let latlng
        if (s_param) {
            latlng = s_param.split(",")
            setCtxLat(latlng[0])
            setCtxLng(latlng[1])
            setZoom(15)
        } else {
            setZoom(7.5)
        }
        //TODO: Pass lat and lng to map marker
        //to be display when the button is clicked on the card
    }, [location])

    useEffect(() => {
        loadAddress(details.latitude, details.longitude, api_key)
        console.log(addresses)
        return () => { }
    }, [])

    //HANDLERS
    const handleViewOnMap = (lat, lng) => {
        navigate(`?latlng=${lat},${lng}`)
        setCtxLat(lat)
        setCtxLng(lng)
        if (isTabletOrMobile) { openModal() }
    }

    function handleSharing() {
        navigator.share({
            title: `Active fire is at ${props.address}`,
            url: `?fire=${props.lat}&${props.lng}`
        })
    }




    return (
        <MainBox>
            <HeadBox>
                {
                    details.status ? (
                        <Span>
                            <ActiveFireMarker>
                                <LocalFireDepartmentRounded />
                            </ActiveFireMarker>
                            Active Fire
                        </Span>
                    ) : (
                        <Span>
                            <HotspotMarker>
                                <LightModeRounded />
                            </HotspotMarker>
                            Hotspot
                        </Span>
                    )
                }

                &#8226;
                <Time>
                    {/* {Num2Time(details.acq_time)} */}
                </Time>

            </HeadBox>

            <Typography variant='h5'>
                <small>
                    {details.address + " "} &#8226; {details.county} 
                </small>
            </Typography>

            <Stack>

                <Button
                    variant='contained'
                    onClick={() => handleViewOnMap(details.latitude, details.longitude)}
                >
                    <IconWrap>
                        <MapRounded />
                    </IconWrap>
                    View on Map
                </Button>
                <Button
                    variant='contained'
                    onClick={handleSharing}
                >
                    <IconWrap>
                        <ShareRounded />
                    </IconWrap>
                    Share
                </Button>

            </Stack>
        </MainBox>
    )
}

export default Card