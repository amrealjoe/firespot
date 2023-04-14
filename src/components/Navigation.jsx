import * as React from 'react';
import styled from "styled-components"
import logo from "@assets/firespot.svg"
import { AppBar, Box, Drawer, Tooltip, IconButton, Toolbar } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './navigation/Header';

const AppBarBox = styled(AppBar)`
    && {
        background-color: #FF3F3F;
    }
`

const ToolbarBox = styled(Toolbar)`
    && {
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
    }
`

const Image = styled.img`
    width: 185px;
    position: absolute;
    bottom: 0;
`

const DrawerContent = styled(Box)`
    && {
        min-width: 768px;
        position: relative;
        box-sizing: border-box;
        padding: 12px;
        @media (max-width: 768px) {
            min-width: 99vw;
        }
    }

`

export default function Navigation() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => { setOpen(!open) }

    return (
        <Box>
            <AppBarBox position="static">
                <ToolbarBox>
                    <NavLink href="/">
                        <Image src={logo} />
                    </NavLink>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="help & FAQ"
                        onClick={handleOpen}
                    >
                        <Tooltip title="Help & FAQ">
                            <HelpOutlineIcon />
                        </Tooltip>
                    </IconButton>
                </ToolbarBox>
            </AppBarBox>
            <Drawer
                open={open}
                anchor={"right"}
                onClose={() => setOpen(false)}>
                <DrawerContent>
                    <Header handleOpen={handleOpen} />
                </DrawerContent>
            </Drawer>
        </Box>
    );
}