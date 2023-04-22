import { Typography } from '@mui/material'
import MuiButton from "@mui/material/Button"
import styled from 'styled-components'
import MuiMenu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';

export const MainBox = styled.div`
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

export const HeadBox = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`

export const DotWrap = styled.span`
    /* font-size: xx-large; */
    border: thin solid red;
    /* width: 4px;
    height: 4px; */
    display: grid;
    place-items: center;
`

export const Location = styled.section`
    display: flex;
    gap: 4px;
    align-items: center;
`

export const Stack = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Button = styled(MuiButton)`
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

export const IconWrap = styled.span`
    border-radius: 50%;
    background-color: #323232;
    display: grid;
    place-items: center;
    padding: 4px;
    box-sizing: border-box;

    && > svg {
        font-size: large;
    }
`

export const Menu = styled(MuiMenu)`
    && > .MuiMenu-paper {
        min-width: 140px;
        color: rgba(255, 255, 255, 0.87);
        background-color: #4a4a4a;
        font-size: medium;
    }
`
export const MenuItem = styled(MuiMenuItem)`
    && {
        border-radius: 10px;
        margin: 4px;
        background-color: black;
        font-size: small;
        display: flex;
        gap: 8px;
    }
     &&:hover {
        background-color: black;
     }

`

export default MainBox