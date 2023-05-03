import React, { useCallback, useEffect, useState } from 'react'
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

const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
const api_key = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"


function Card(props) {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const handleViewOnMap = (lat, lng) => { navigate(`?fire=lat${lat}&long${lng}`) }
    const [addresses, setAddresses] = useState([])
    const location = useLocation()
    const fireURL = searchParams.get("fire")
    function handleSharing() {
        navigator.share({
            title: `Active fire is at ${props.address}`,
            url: `?fire=${props.lat}&${props.lng}`
        })
    }

    const runner = async () => {
        setAddresses(await loadAddress(props.lat, props.lng, api_key))
    }
    useEffect(() => {
        runner()
    }, [])

    // const address = addresses[0]?.formatted_address
    const address = addresses[0].address_components || []
    const place = address[1]?.long_name || "Loading..."
    const city = address[2]?.long_name || "Loading..."
    const county = address[3]?.long_name || "Loading..."

    console.log(address)

    return (
        <MainBox>
            <HeadBox>
                {
                    props.status ? (
                        <Span>
                            <addresstiveFireMarker>
                                <LocalFireDepartmentRounded />
                            </addresstiveFireMarker>
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
                    {Num2Time(props.time)}
                    {/* 13:21 pm */}
                </Time>

            </HeadBox>

            <Typography variant='h5'>
                <small>
                    {/* {address} */}
                    {/* {props.lat} {" "} &#8226; {props.lng} {" Coordinate "} */}
                    {/* {res} */}
                    {place + ", " + city} {" "} &#8226; {county}
                </small>
            </Typography>

            <Stack>

                <Button
                    variant='contained'
                    onClick={() => handleViewOnMap(props.lat, props.lng)}
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