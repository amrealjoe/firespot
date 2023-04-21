import { CircularProgress, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const MapSpinner = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    backdrop-filter: blur(2px);
    display: grid;
    place-items: center;
    align-content: center;
`

export default function Spinner() {
    return (
        <MapSpinner>
            <CircularProgress />
            <Typography>Loading Map</Typography>
        </MapSpinner>
    )
}
