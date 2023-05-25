import React, { useState, useCallback, useContext, useEffect } from 'react'
import styled from 'styled-components'
import "./css/maps.css"
//TODO: use .env variable for api key
const API_KEY = import.meta.env.VITE_MAP_API_KEY
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
    // const { zoom, setZoom, ctxLat, setCtxLat, ctxLng, setCtxLng, ctxCenter, setCtxCenter } = useContext(withMaker)
    const { FireData } = useContext(withData)
    const [lat, setLat] = useState(6.428055)
    const [lng, setLng] = useState(-9.429499)
    const [zoom, setZoom] = useState(7.5)
    const [center, setCenter] = useState({ lat: 6.428055,lng: -9.429499})
    let latlng

    useEffect(() => {
        const s_param = searchParams.get("latlng")
        if (s_param) {
            latlng = s_param.split(",")
            setLat(latlng[0])
            setLng(latlng[1])
            setCenter({lat: latlng[0], lng: latlng[1]})
            setZoom(15)
        } else {
            setZoom(7.5)
        }
        //TODO: Pass lat and lng to map marker
        //to be display when the button is clicked on the card
    }, [location])

    


    return (
        <MapBox>
            { ctxLat + ctxLng}
            <GoogleMap
                mapContainerStyle={ContainerStyle}
                center={center}
                zoom={zoom}
                onLoad={onLoad}
            > {
                    latlng ? (<><Marker
                        position={{
                            lat: parseInt(lat),
                            lng: parseInt(lng)
                        }}
                        icon={<LocalFireDepartment />}
                    /></>) :
                        (FireData.map((marker, key) => (
                            <Marker
                                key={key}
                                position={{
                                    lat: parseInt(marker.lat),
                                    lng: parseInt(marker.lng)
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