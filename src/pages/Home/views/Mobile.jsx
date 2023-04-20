import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
// import "./css/maps.css"
// const API_KEY = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
// import DesktopMap from "@/DesktopMap"

//CUSTOM COMPONENTS
import FireFeed from '@/FireFeed';
import MobileMap from "@/MobileMap"

//STYLED COMPONENTS
const Container = styled.div`
`

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

function MobileView() {

    return (
        <Container>
            <FeedBox>
                <FireFeed />
            </FeedBox>
        </Container>
    )
}


export default MobileView