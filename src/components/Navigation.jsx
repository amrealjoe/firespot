import * as React from 'react';
import styled from "styled-components"
import logo from "@assets/firespot.svg"
import { AppBar, Box, Drawer, Tooltip, IconButton, Toolbar } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
    min-width: 600px;
    position: relative;
    box-sizing: border-box;
    padding: 12px;
`
const CloseBtn = styled(IconButton)`
    && {
        position: absolute;
        right: 4px;
        top: 4px;
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
                    >
                        <Tooltip title="Help & FAQ">
                            <HelpOutlineIcon onClick={(handleOpen)} />
                        </Tooltip>
                    </IconButton>
                </ToolbarBox>
            </AppBarBox>
            <Drawer
                open={open}
                anchor={"right"}
                onClose={() => setOpen(false)}>
                <DrawerContent>
                    <CloseBtn onClick={handleOpen}>
                        <CloseIcon />
                    </CloseBtn>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}