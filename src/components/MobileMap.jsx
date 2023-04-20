import React from 'react'
import styled from 'styled-components'
import "./css/maps.css"
const API_KEY = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"


//STYLED COMPONENTS
const MapBox = styled.div`
    width: 660px;
    height: 555px;
`

function MobileMap({ center, zoom }) {

    return (
        <MapBox>
            Mobile Map Box
        </MapBox>
    )
}

MobileMap.defaultProps = {
    center: {
        lat: 5.43952,
        lgn: -8.0415
    },
    zoom: 10
}

export default MobileMap