import React, { useState, useEffect }  from 'react'
import { Typography, Box } from '@mui/material'
import styled from 'styled-components'
import MuiButton from "@mui/material/Button"

const MainBox = styled(Box)`
    && {
        border-radius: 10px;
        padding: 12px;
        margin: 6px;
        background-color: #fe3a3a9e;
    }
`
const HeaderText = styled(Typography)`
    && {
        margin-bottom: 12px;
    }
`
const BodyText = styled(Typography)``
const FooterBox = styled(Box)`
    && {
        display: flex;
        margin-top: 12px;
        justify-content: end;
    }
`
const Button = styled(MuiButton)`
    && {
        text-transform: capitalize;
        border-radius: 12px;
        background-color: black;
        color: white;
    }
    &&:hover {
        background-color: black;
    }
`


function Notice(props) {
    
    return (
        <MainBox>
            <HeaderText variant='h5'>Disclaimer</HeaderText>
            <BodyText variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos facere laborum voluptatem velit harum quis et fuga quidem cumque temporibus libero vero vitae, debitis odio neque? Adipisci ipsa quas amet.
            </BodyText>
            <FooterBox>
                <Button onClick={props.dontShowNotice}>Don't show this again</Button>
            </FooterBox>

        </MainBox>
    )
}

export default Notice