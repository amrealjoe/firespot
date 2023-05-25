import React, { useState, useCallback, useContext, useEffect } from 'react'
import styled from 'styled-components'
import "./css/maps.css"
//TODO: use .env variable for api key
const API_KEY = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import Spinner from "@/Spinner"
import { useLocation } from 'react-router-dom'
import fetchData from '@helpers/fetchData'
import { LocalFireDepartment } from '@mui/icons-material'
import { withMaker } from '@contexts/ProvideMarker'
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

// const zoom = 7.5

function Map() {
    const [map, setMap] = useState(null);
    const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY });
    const onLoad = useCallback(function callback(map) { setMap(map); }, []);
    if (!isLoaded) { return <Spinner />; }

    const { FireData } = useContext(withData)

    const { zoom,
        ctxLat,
        ctxLng,
        ctxCenter,
        setCtxCenter
    } = useContext(withMaker)

    setCtxCenter({ lat: ctxLat, lng: ctxLng })

    return (
        <MapBox>
            { ctxLat + ctxLng}
            <GoogleMap
                mapContainerStyle={ContainerStyle}
                center={ctxCenter.lat ? ctxCenter : center}
                zoom={zoom}
                onLoad={onLoad}
            > {
                    ctxCenter.lat ? (<><Marker
                        position={{
                            lat: parseInt(ctxLat),
                            lng: parseInt(ctxLng)
                        }}
                        // icon={<LocalFireDepartment />}
                        icon={""}
                    /></>) :
                        (fireData.map((marker, key) => (
                            <Marker
                                key={key}
                                position={{
                                    lat: parseInt(marker.latitube),
                                    lng: parseInt(marker.longitube)
                                }}
                                icon={""}
                            />
                        )))
                }
            </GoogleMap>
        </MapBox>

    )
}

export default Map