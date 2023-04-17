import styled from 'styled-components'
import MuiMenu from '@mui/material/Menu';

export const Menu = styled(MuiMenu)`
    && > .MuiMenu-paper {
        min-width: 140px;
        color: rgba(255, 255, 255, 0.87);
        background-color: #0f0f0f;
        font-size: medium;
    }
`

export default Menu