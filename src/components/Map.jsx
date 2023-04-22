import React from 'react'
import styled from 'styled-components'
import "./css/maps.css"
const API_KEY = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'
import Spinner from "./Spinner"
import Markers from './Markers'

//STYLED COMPONENTS
const MapBox = styled.div`
    width: 660px;
    height: 555px;
`

const center = { lat: parseInt(5.43952), lgn: parseInt(-8.0415) }
const lat = 5.43952
const lng = -8.0415

function Map({center, zoom}) {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: API_KEY
    })

    if (!isLoaded) {
        return (<Spinner />)
    }

    return (
            // center={{ lat: +lat, lng: +lng }}
        <MapBox>
            <GoogleMap
                center={center}
                zoom={zoom}
                mapContainerStyle={{ width: "100%", height: '100%' }}
            >
                <Markers lat={center.lat} lng={center.lng} fire={true} />
            </GoogleMap>
        </MapBox>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 10
}

export default Map