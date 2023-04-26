import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiDialog from '@mui/material/Dialog';
import MediaQuery from 'react-responsive'
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

//CUSTOM COMPONENTS
import FireFeed from '@/FireFeed';
import MobileMap from "@/MobileMap"
import Map from '@/Map';

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

const Dialog = styled(MuiDialog)`
    && .MuiPaper-root {
        /* width: 400px;
        height: 400px; */
    }
`

function MobileView() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container>
            <FeedBox>
                <FireFeed />
            </FeedBox>
            <Button onClick={handleOpen}>Open Modal</Button>
            <MediaQuery maxWidth={991}>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="title"
                    aria-describedby="description"
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} >
                        {"Fire Location"}
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <Map />
                    </DialogContent>
                </Dialog>
            </MediaQuery>
        </Container>
    )
}

export default MobileView