import { CircularProgress, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const MapSpinner = styled.div`
    width: 100%;
    height: 88%;
    position: absolute;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
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
