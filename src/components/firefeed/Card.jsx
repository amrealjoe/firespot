import React, { useCallback, useContext, useEffect, useState } from 'react'
import { LocalFireDepartmentRounded, ShareRounded, LightModeRounded, MapRounded } from '@mui/icons-material'
import MainBox, { Button, HeadBox, IconWrap, Span, Time, Stack } from './components'
import { Typography } from '@mui/material';
import { ActiveFireMarker, HotspotMarker } from '../Markers';
import { useNavigate } from 'react-router-dom';
import withModal from '@contexts/ProvideModal';
import { useMediaQuery } from 'react-responsive'
const api_key = import.meta.env.VITE_MAP_API_KEY
import { getAddress } from '@helpers/getAddress';

function Card(props) {
    //STATE VARIABLES
    const { details } = props
    console.log(details)
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    const { openModal } = useContext(withModal)
    const navigate = useNavigate()
    const [address, setAddress] = useState({ city: "", county: "", country: "" })


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

    useEffect(() => {
        async function fetchAddress() {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${details.latitube},${details.longitube}&key=${api_key}`
            )
                .then((response) => response.json())
                .then((result) => result)
                .catch((err) => console.error(err));

            const { results } = response;
            const { address_components } = results[0];
            const { long_name: city } = address_components[1];
            const { long_name: county } = address_components[3];
            const { long_name: country } = address_components[4];
            setAddress({ city, county, country });
        }
        fetchAddress()
    }, [])
    //TODO: remove log
    console.log(address)

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
                {
                    address.city
                        ? <small>{address.city + " "} &#8226; {address.county}</small>
                        : <small>Loading fire location...</small>
                }
            </Typography>

            <Stack>

                <Button
                    variant='contained'
                    onClick={() => handleViewOnMap(details.latitube, details.longitube)}
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