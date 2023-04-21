import React, { useState } from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Unstable_Grid2';
import Dialog from '@mui/material/Dialog';
import MediaQuery from 'react-responsive'
import Button from "@mui/material/Button"
import DialogTitle from '@mui/material/DialogTitle';


// Grid version 2
// import "./css/maps.css"
// const API_KEY = "AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8"
// import MobileMap from "@/MobileMap"

//CUSTOM COMPONENTS
import FireFeed from '@/FireFeed';
import DesktopMap from "@/DesktopMap"

//STYLED COMPONENTS
// const Container = styled(Grid)`
//     width: 660px;
//     height: 555px;
//     border: solid red;
// `

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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid container spacing={1}>
            <Grid item xs={5} >
                <FeedBox>
                    <FireFeed />
                </FeedBox>
            </Grid>
            <Grid item xs={7}>
                <MapBox>
                    <DesktopMap />
                </MapBox>
            </Grid>
            <Button onClick={handleOpen}>Open Modal</Button>
            <MediaQuery maxWidth={991}>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                </Dialog>
            </MediaQuery>
        </Grid>
    )
}


export default DesktopView