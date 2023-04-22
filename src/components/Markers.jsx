import styled from "styled-components"
import { IconWrap } from "./firefeed/components"
import React from 'react'

export const ActiveFireMarker = styled(IconWrap)`
    background-color: #FF3F3F;
    color: inherit;
    position: relative;

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

export const HotspotMarker = styled(ActiveFireMarker)`
        background-color: #FFC611;
        &:before,
        &:after {

        border:1.2px solid #FFC611;
        }
`


function Markers({ lat, lng, onClick, fire }) {
    return (
        <div onClick={onClick}>
            fire ? <ActiveFireMarker /> : <HotspotMarker />
        </div>
    ) 
}

export default Markers
