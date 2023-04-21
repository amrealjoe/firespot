import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Container } from '@mui/material';
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