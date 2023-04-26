import React, { useState } from 'react'
import {
    LocalFireDepartmentRounded, FacebookRounded,
    ShareRounded, LightModeRounded, MapRounded
} from '@mui/icons-material'
import MainBox, {
    Button, HeadBox, IconWrap, Span, Time,
    Stack, Menu, MenuItem
} from './components'
import { Typography } from '@mui/material';
import { ActiveFireMarker, HotspotMarker } from '../Markers';
// import {geocoding} from "reverse-geocoding'"
// import { Geocoder } from "node-geocoder";

const num2time = num => {
    if (num < 100) num *= 100;
    const [_, hh, mm] = num.toString().match(/(\d{1,2})(\d{2})$/)
    return `${hh.padStart(2, "0")}:${mm}`
}

function Card(props) {
    const { fire } = props
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };
    let geolocal;

    return (
        <MainBox>
            <HeadBox>
                {
                    props.status ? (
                        <Span>
                            <ActiveFireMarker>
                                <LocalFireDepartmentRounded />
                            </ActiveFireMarker>
                            Active Fire
                        </Span>
                    ) : (
                        <Span>
                            <HotspotMarker>
                                <LightModeRounded />
                            </HotspotMarker>
                            Hotspot
                        </Span>
                    )
                }

                &#8226;
                <Time>
                    {num2time(props.time)} - {props.date}
                </Time>

            </HeadBox>

            <Typography variant='h5'>
                <small>
                    {/* {geolocal = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.lat},${props.lng}&key=AIzaSyDNqzma-9F5pvmHORMDbJwUxxIjgo00dW8`} */}
                    {/* {geolocal} */}
                    {props.lat} {" "} &#8226; {props.lng} {" Coord"}
                </small>
            </Typography>

            <Stack>

                <Button variant='contained'>
                    <IconWrap>
                        <MapRounded />
                    </IconWrap>
                    View on Map
                </Button>
                <Button
                    variant='contained'
                    aria-controls={open ? 'share-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleOpen}
                >
                    <IconWrap>
                        <ShareRounded />
                    </IconWrap>
                    Share
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'share-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <IconWrap>
                            <FacebookRounded />
                        </IconWrap>
                        Facebook
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <IconWrap>
                            <ShareRounded />
                        </IconWrap>
                        WhatsApp</MenuItem>
                    <MenuItem onClick={handleClose}>
                        <IconWrap>
                            <ShareRounded />
                        </IconWrap>
                        Twitter</MenuItem>
                </Menu>
            </Stack>
        </MainBox>
    )
}

export default Card