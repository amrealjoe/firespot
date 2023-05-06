import React, { useCallback, useContext, useEffect, useState } from 'react'
import {
    LocalFireDepartmentRounded, FacebookRounded,
    ShareRounded, LightModeRounded, MapRounded
} from '@mui/icons-material'
import MainBox, {
    Button, HeadBox, IconWrap, Span, Time,
    Stack, Menu, MenuItem
} from './components'
import { Typography } from '@mui/material';
import { ActiveFireMarker, HotspotMarker } from '../Markers';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Num2Time from "@helpers/Num2Time"
import { useMemo } from 'react';
import { loadAddress } from './helpers';
import withModal from '@contexts/ProvideModal';

const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
const api_key = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
import { useMediaQuery } from 'react-responsive'
import { withMaker } from '@contexts/ProvideMarker';

function getCoord(coord) {
    return { lat, lng }
}

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
    }, [location.search])


    // console.log(JSON.stringify(latlng))

    //HANDLERS
    const handleViewOnMap = (lat, lng) => {
        navigate(`?latlng=${lat},${lng}`)
        if (isTabletOrMobile) { openModal() }
    }

    function handleSharing() {
        navigator.share({
            title: `Active fire is at ${props.address}`,
            url: `?fire=${props.lat}&${props.lng}`
        })
    }

    // const runner = async () => {
    //     setAddresses(await loadAddress(props.lat, props.lng, api_key))
    // }
    // useEffect(() => {
    //     runner()
    // }, [])

    // // const address = addresses[0]?.formatted_address
    // const address = addresses[0]?.address_components || []
    // const place = address[1]?.long_name || "Loading..."
    // const city = address[2]?.long_name || "Loading..."
    // const county = address[3]?.long_name || "Loading..."

    // console.log(address)




    return (
        <MainBox>
            {/* {ctxLat + " - " + ctxLng + " - " + zoom} */}
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
                    {/* {Num2Time(props?.time)} */}
                    13:21 pm
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
                    onClick={() => handleViewOnMap(details.lat, details.lng)}
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