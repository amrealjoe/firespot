import React from 'react'
import styled from 'styled-components'
import "./css/maps.css"
const API_KEY = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'
import Spinner from "@/Spinner"

//STYLED COMPONENTS
const MapBox = styled.div`
    width: 660px;
    height: 555px;
`

const center = { lat: parseInt(5.43952), lgn: parseInt(-8.0415) }
const lat = 5.43952
const lng = -8.0415

function DesktopMap() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: API_KEY
    })

    if (!isLoaded) {
        return (<Spinner />)
    }



    return (
        <MapBox>
            <GoogleMap
                center={{ lat: +lat, lng: +lng }}
                zoom={15}
                mapContainerStyle={{ width: "100%", height: '100%' }}
            >
                this is the map
            </GoogleMap>
        </MapBox>
    )
}

export default DesktopMap