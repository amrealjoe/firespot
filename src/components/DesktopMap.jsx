import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import "./css/maps.css"
const API_KEY = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
import { GoogleMap, LoadScript, useLoadScript, Marker } from '@react-google-maps/api'
import Spinner from "@/Spinner"
import { ActiveFireMarker } from "./Markers"
import { LocalFireDepartment } from '@mui/icons-material'

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

function DesktopMap() {
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);

    const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY });
    const onLoad = useCallback(function callback(map) { setMap(map); }, []);
    if (!isLoaded) { return <Spinner />; }


    function handleMapClick(event) {
        // Add a new marker to the array when the map is clicked
        const newMarker = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date()
        };
        setMarkers(current => [...current, newMarker]);
    }

    return (
        <MapBox>
            <GoogleMap
                mapContainerStyle={ContainerStyle}
                center={center}
                zoom={zoom}
                onLoad={onLoad}
                onClick={handleMapClick}
            >
                {markers.map(marker => (
                    <Marker
                        key={marker.time.toISOString()}
                        position={{ lat: marker.lat, lng: marker.lng }}
                        icon={<LocalFireDepartment />}
                    />
                ))}
            </GoogleMap>
        </MapBox>
    )
}

export default DesktopMap