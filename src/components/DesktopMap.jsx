import React from 'react'
import styled from 'styled-components'
import "./css/maps.css"
const API_KEY = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
import { useJsApiLoader, GoogleMap, LoadScript } from '@react-google-maps/api'
import Spinner from "@/Spinner"

//STYLED COMPONENTS
const MapBox = styled.div`
    width: 660px;
    height: 555px;
`

const ContainerStyle = {
    width: '100%',
    height: '99%'
};

const center = {
    lat: 6.428055,
    lng: -9.429499
};

const zoom = 7.5

function DesktopMap() {
    return (
        <MapBox>
            <LoadScript
                googleMapsApiKey={"AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"}
            >
                <GoogleMap
                    mapContainerStyle={ContainerStyle}
                    center={center}
                    zoom={zoom}
                >
                    {/* Child components, such as markers, info windows, etc. */}
                </GoogleMap>
            </LoadScript>
        </MapBox>
    )
}

export default DesktopMap