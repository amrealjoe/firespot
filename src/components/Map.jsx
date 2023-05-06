import React, { useState, useCallback, useContext, useEffect } from 'react'
import styled from 'styled-components'
import "./css/maps.css"
const API_KEY = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import Spinner from "@/Spinner"
import { useLocation } from 'react-router-dom'
import fetchData from '@helpers/fetchData'
import { LocalFireDepartment } from '@mui/icons-material'
import { withMaker } from '@contexts/ProvideMarker'


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

// const zoom = 7.5

function Map() {
    const [map, setMap] = useState(null);
    const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY });
    const onLoad = useCallback(function callback(map) { setMap(map); }, []);
    if (!isLoaded) { return <Spinner />; }
    const fireData = fetchData()
    const { zoom,
        ctxLat,
        ctxLng,
        ctxCenter, } = useContext(withMaker)

    return (
        <MapBox>
            <GoogleMap
                mapContainerStyle={ContainerStyle}
                center={ctxCenter.lat ? ctxCenter : center}
                zoom={zoom}
                onLoad={onLoad}
            > {
                    ctxLat ? (<><Marker
                        // key={key}
                        position={{
                            lat: parseFloat(ctxLat),
                            lng: parseFloat(ctxLng)
                        }}
                        icon={<LocalFireDepartment />}
                    /></>) :
                        (fireData.map((marker, key) => (
                            <Marker
                                key={key}

                                position={{
                                    lat: parseFloat(marker.latitube),
                                    lng: parseFloat(marker.longitube)
                                }}
                                icon={<LocalFireDepartment />}
                            />
                        )))
                }
            </GoogleMap>
        </MapBox>

    )
}

export default Map