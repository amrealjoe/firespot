import React, { useState } from 'react'
import {
    LocalFireDepartmentRounded, FacebookRounded,
    LocationOn, ShareRounded, LightModeRounded, MapRounded
} from '@mui/icons-material'
import MainBox, {
    ActiveFire, Button, HeadBox, Hotspot,
    IconWrap, Location, Stack, Menu, MenuItem
} from './components'
import { Typography } from '@mui/material';


function Card() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleOpen = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };

    return (
        <MainBox>
            <HeadBox>
                <Button variant='contained'>
                    <ActiveFire>
                        <LocalFireDepartmentRounded />
                    </ActiveFire>
                    Active Fire
                </Button>
                {/* <Button variant='contained'>
                    <Hotspot>
                        <LightModeRounded />
                    </Hotspot>
                    Hotspot
                </Button> */}
                {/* &#8226; */}
                
            </HeadBox>
            <Typography variant='h5'>14 Street Sinkor, Monrovia, Liberia</Typography>
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