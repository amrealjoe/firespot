import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';

//CUSTOM COMPONENTS
import FireFeed from '@/FireFeed';
import Map from "@/Map"

//STYLED COMPONENTS
const FeedBox = styled.div`
    background-color: transparent;
    min-height: 180vh;
`
const MapBox = styled.div`
    background-color: transparent;
    border: thin solid lightgray;
    min-height: 80vh;
    position: sticky;
    right: 0;
    top:0;
`

function DesktopView() {

    return (
        <Grid container spacing={1}>
            <Grid item xs={5} >
                <FeedBox>
                    <FireFeed />
                </FeedBox>
            </Grid>
            <Grid item xs={7}>
                <MapBox>
                    <Map />
                </MapBox>
            </Grid>
        </Grid>
    )
}


export default DesktopView