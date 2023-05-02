import React, { useState } from 'react'
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
import { useNavigate, useSearchParams } from 'react-router-dom';

function Card(props) {
    // const { fire } = props
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const handleViewOnMap = (lat, lng) => { navigate(`?fire=lat${lat}&long${lng}`) }
    const fireURL = searchParams.get("fire")
    function handleSharing() {
        navigator.share({
            title: `Active fire is at ${props.address}`,
            url: `?fire=${props.lat}&${props.lng}`
        })
    }

    return (
        <MainBox>
            {fireURL}
            <HeadBox>
                {
                    props.status ? (
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
                    {/* {num2time(props.time)} - {props.date} */}
                    13:21 pm
                </Time>

            </HeadBox>

            <Typography variant='h5'>
                <small>
                    {/* {geolocal = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.lat},${props.lng}&key=AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8`} */}
                    {/* {geolocal} */}
                    {/* {props.lat} {" "} &#8226; {props.lng} {" Coord"} */}
                    {props.address} {" "} &#8226; {props.county} {" County"}

                </small>
            </Typography>

            <Stack>

                <Button
                    variant='contained'
                    onClick={() => handleViewOnMap(10.0340, 23.0978)}
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