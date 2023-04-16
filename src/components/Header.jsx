import React from 'react'
import Filter from './Filter'
import styled from 'styled-components'
import { Typography } from '@mui/material'

const Flexbox = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    align-items: center;
`

const Textbox = styled(Typography)`
    && {

    }
`

function Header() {
    return (
        <Flexbox>
            <Textbox variant='body1'>Last 24 hour</Textbox>
            <Filter />
        </Flexbox>
    )
}

export default Header