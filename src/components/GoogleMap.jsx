import React, { useState, useCallback, useContext, useEffect } from 'react'
import styled from 'styled-components'
import "./css/maps.css"
//TODO: use .env variable for api key
const API_KEY = import.meta.env.VITE_MAP_API_KEY
import { GoogleMap, useLoadScript, Marker, LoadScript } from '@react-google-maps/api'
import Spinner from "@/Spinner"
import { useLocation } from 'react-router-dom'
import fetchData from '@helpers/fetchData'
import { LocalFireDepartment } from '@mui/icons-material'
import { withMaker } from '@contexts/ProvideMarker'
import { withData } from '@contexts/ProvideData'
import { useSearchParams } from 'react-router-dom'

//STYLED COMPONENTS
const MapBox = styled.div`
    width: 660px;
    height: 500px;
`

const mapContainerStyle = {
    width: '101%',
    height: '105%'
};

const centers = [{
    lat: 6.428055,
    lng: -9.429499
},
{
    lat: 37.672,
    lng: -122.219
},
{
    lat: 37.832,
    lng: -122.424
}];
const lat = 6.428055
const lng = -9.429499
const zoom = 7.5

export default function GMap() {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY });
    if (!isLoaded) { return <Spinner />; }
    const { FireData } = useContext(withData)
    console.log(FireData)
    
    return (
        <MapBox>
            <GoogleMap
                id="marker-example"
                mapContainerStyle={mapContainerStyle}
                zoom={7.5}
                center={centers[0]}
            >
            
                <Marker
                    icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
                    position={centers[0]}
                />
                {FireData.forEach((marker, key) => (
                    <Marker
                        key={key}
                        position={{
                            lat: parseInt(marker.latitube),
                            lng: parseInt(marker.longitube)
                        }}
                        icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
                    />
                ))}
                
            </GoogleMap>
        </MapBox>
    )
}
