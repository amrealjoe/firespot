import React from 'react'
import GoogleMap from 'google-map-react'
import styled from 'styled-components'

const MainBox = styled.div`
    min-width: 100%;
    min-height: 100%;
`

function Map({center, zoom }) {
    return (
        <MainBox>
            <GoogleMap
                bootstrapURLKeys={{ key: "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8" }}
                defaultCenter={center}
                defaultZoom={zoom}
            >

            </GoogleMap>
        </MainBox>
    )
}

Map.defaultProps = {
    center: {
        lat: 5.43952,
        lgn: -8.0415
    },
    zoom: 10
}

export default Map