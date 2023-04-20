import React from 'react'
import styled from 'styled-components'
import "./css/maps.css"
const API_KEY = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"


//STYLED COMPONENTS
const MapBox = styled.div`
    width: 660px;
    height: 555px;
`

function DesktopMap({ center, zoom }) {

    return (
        <MapBox>
            Desktop Map Box
        </MapBox>
    )
}

DesktopMap.defaultProps = {
    center: {
        lat: 5.43952,
        lgn: -8.0415
    },
    zoom: 10
}

export default DesktopMap