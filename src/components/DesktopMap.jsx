import React from 'react'
import styled from 'styled-components'
import "./css/maps.css"
const API_KEY = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'


//STYLED COMPONENTS
const MapBox = styled.div`
    width: 660px;
    height: 555px;
    border: solid red;
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
        return "Map loading..."
    }



    return (
        <MapBox>
            <GoogleMap
                center={{lat: +lat, lng: +lng}}
                zoom={15}
                mapContainerStyle={{width: "100%", height: '100%'}}
            >

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