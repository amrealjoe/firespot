import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import styled from "styled-components"
import { Container } from '@mui/material';
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'

//CUSTOM COMPONENTS
import Header from '@/Header';
import DesktopView from './views/Desktop';
import MobileView from './views/Mobile';

//STYLED COMPONENTS
const MainBox = styled(Container)`
    && {
        position: relative;
    }
`


function Home() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <MainBox maxWidth={'lg'}>
            <Header />
            <MediaQuery minWidth={992}>
                <DesktopView />
            </MediaQuery>
            <MediaQuery maxWidth={991}>
                <MobileView />
            </MediaQuery>


                

        </MainBox>
    )
}

export default Home