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
import { useNavigate, useSearchParams } from 'react-router-dom';
import Num2Time from "@helpers/Num2Time"
import { useMemo } from 'react';

const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"


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

    const loadAddress = async (lat, lng) => {
        let addresses = []
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8`)
            .then(response => response.json())
            .then((result => result))
            .catch(err => console.log(err));
        const { results } = response
        results.forEach(element => {
            addresses.push(element.formatted_address)
        });
            return addresses
    }

    const ad = useCallback( () =>  loadAddress(props.lat, props.lng), [props.lat, props.lng])
    

    // const [address, setAddress] = useState("")
    const [time, setTime] = useState(0)
    useEffect(() => {
        // setAddress(loadAddress(props.lat, props.lng))
        setTime(Num2Time(props.time))
    }, [])
    


    return (
        <MainBox>
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
                    {time}
                    {/* 13:21 pm */}
                </Time>

            </HeadBox>

            <Typography variant='h5'>
                <small>
                    {console.log(JSON.stringify(ad))}
                    {/* {props.lat} {" "} &#8226; {props.lng} {" Coord"} */}
                    {/* {props.address} {" "} &#8226; {props.county} {" County"} */}
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