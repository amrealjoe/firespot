import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components"
import { IconButton, Typography } from '@mui/material';

const Flexbox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`


function Header(props) {
    return (
        <Flexbox>
            <Typography variant='h5'>Help & FAQ</Typography>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="Help & FAQ"
                onClick={props.handleOpen}
            >
                <CloseIcon  />
            </IconButton>
        </Flexbox>
    )
}

export default Header