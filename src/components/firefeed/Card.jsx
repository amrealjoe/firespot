import React, { useState } from 'react'
import {
    LocalFireDepartmentRounded, FacebookRounded,
    LocationOn, ShareRounded, LightModeRounded, MapRounded
} from '@mui/icons-material'
import MainBox, {
    Button, HeadBox, IconWrap, Span, Time,
    Location, Stack, Menu, MenuItem } from './components'
import { Typography } from '@mui/material';
import { ActiveFireMarker, HotspotMarker } from '../Markers';


function Card(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };

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
                    13:21 pm
                </Time>
                                
            </HeadBox>
            
            <Typography variant='h5'>
                <small>
                    {props.address} {" "} &#8226; {props.county} {" County"}
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