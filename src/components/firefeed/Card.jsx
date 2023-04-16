import { HeatPumpRounded, LocationCitySharp, LocationOn, MapRounded, ShareLocationSharp, ShareRounded, WarningRounded } from '@mui/icons-material'
import { Alert, Typography } from '@mui/material'
import MuiButton from "@mui/material/Button"
import MuiStack from "@mui/material/Stack"
import React from 'react'
import styled from 'styled-components'

const MainBox = styled.div`
    border-radius: 17px;
    background-color: black;
    max-height: 200px;
    font-size: medium;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content:space-between;
    overflow: auto;
    padding: 12px;
`

const HeadBox = styled.div`
display: flex;
`

const Location = styled(Typography)`
    && {
    }
`

const Stack = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Button = styled(MuiButton)`
    &&{
        font-size: small;
        text-transform: capitalize;
        background-color: #1f1f1f;
        border-radius: 12px;
        display: flex;
        align-items: center;
        padding: 4px 8px;
        gap: 8px;
    }

    &&:hover {
        background-color: #1f1f1f;

    }
`

const IconWrap = styled.span`
    border-radius: 50%;
    background-color: #323232;
    display: grid;
    place-items: center;
    padding: 4px;

    && > svg {
        font-size: large;
    }
`

const ActiveFire = styled(IconWrap)`
    background-color: #FF3F3F;
    color: inherit;
    position: relative;
    font-size: x-small;

    &:before,
        &:after {
        content:'';
        position:absolute;
        top:0; 
        right:0; 
        bottom:0; 
        left:0;
        border-radius:50%;
        border:1.2px solid #df2727;
        }

        &:before {
        animation: ripple 2s linear infinite;
        }
        &:after {
        animation: ripple 2s linear 1s infinite;
        }
        @keyframes ripple {
            0% {transform:scale(1); }
            75% {transform:scale(1.40); opacity:1;}
            100% {transform:scale(1.75); opacity:0;}
        }
`

const Hotspot = styled(ActiveFire)`
        background-color: #FFC611;
        &:before,
        &:after {

        border:1.2px solid #FFC611;
        }
    
`

function Card() {
    return (
        <>
            <MainBox>
                <HeadBox>
                    <Button variant='contained'>
                        <ActiveFire>
                            90c
                        </ActiveFire>
                        Active Fire
                    </Button>
                    {/* <Button variant='contained'>
                        <Hotspot>
                            90c
                        </Hotspot>
                        Hotspot
                    </Button> */}
                </HeadBox>
                <Location variant='h5'>14 Street Sinkor, Monrovia, Liberia</Location>
                <Stack>
                    <Button variant='contained'>
                        <IconWrap>
                            <LocationOn />
                        </IconWrap>
                        Monsterrado County
                    </Button>
                    <Button variant='contained'>
                        <IconWrap>
                            <ShareRounded />
                        </IconWrap>
                        Share
                    </Button>
                </Stack>
            </MainBox>
        </>
    )
}

export default Card