import React, { useContext, useCallback } from 'react'
import styled from 'styled-components'
import "./css/maps.css"
const API_KEY = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import Spinner from "@/Spinner"
import { withData } from '@contexts/ProvideData'

//STYLED COMPONENTS
const MapBox = styled.div`
    width: 660px;
    height: 500px;
`

const ContainerStyle = {
    width: '101%',
    height: '105%'
};

const center = {
    lat: 6.428055,
    lng: -9.429499
};

const zoom = 7.5

function CustomMarkerIcon() {
    return (
        <div style={{
            backgroundColor: 'red',
            width: '50px',
            height: '50px',
            borderRadius: '50%'
        }}></div>
    );
}

function Map() {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY });
    const onLoad = useCallback(function callback(map) { setMap(map); }, []);
    if (!isLoaded) { return <Spinner />; }
    const { data } = useContext(withData)
    console.log(data)

    return (
        <MapBox>
            <GoogleMap
                mapContainerStyle={ContainerStyle}
                center={center}
                zoom={zoom}
                onLoad={onLoad}
            >
                {data.map((marker, key) => (
                    <Marker
                        key={key}
                        position={{
                            lat: parseFloat(marker.latitube),
                            lng: parseFloat(marker.longitube)
                        }}
                        icon={<CustomMarkerIcon />}
                    />
                ))}
            </GoogleMap>
        </MapBox>
    )
}

export default Map