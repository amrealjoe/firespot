import React from 'react'
import styled from 'styled-components'
import "./css/maps.css"
const API_KEY = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'
import { LinearProgress, CircularProgress, Typography } from '@mui/material'


//STYLED COMPONENTS
const MapBox = styled.div`
    width: 660px;
    height: 555px;
`

const MapLoader = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    /* background-color: #34343467; */
    backdrop-filter: blur(2px);
    display: grid;
    place-items: center;
    align-content: center;
`

const center = {lat: parseInt(5.43952), lgn: parseInt(-8.0415)}
// const center = {lat: 48.8584, lgn: 2.2945}
const lat = 5.43952
const lng = -8.0415

function DesktopMap() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: API_KEY
    })

    if (!isLoaded) {
        return (<MapLoader><CircularProgress /><Typography>Map Loading</Typography></MapLoader>)
    }



    return (
        <MapBox>
            <GoogleMap
                center={{lat: +lat, lng: +lng}}
                zoom={15}
                mapContainerStyle={{width: "100%", height: '100%'}}
            >
                this is the map
            </GoogleMap>
        </MapBox>
    )
}

// DesktopMap.defaultProps = {
//     center: {
//         lat: 5.43952,
//         lgn: -8.0415
//     },
//     zoom: 10
// }

export default DesktopMap