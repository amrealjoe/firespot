import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import styled from "styled-components"
import Paper from '@mui/material/Paper';
import FireFeed from '@/FireFeed';
import { Box, Container } from '@mui/material';
import Map from '@/Map';
import MediaQuery from "react-responsive";
import { useMediaQuery } from 'react-responsive'
import Header from '@/Header';

const Item = styled(Paper)`
    && {
        min-height: 780px;
    }
`

function Home() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <Container maxWidth={'lg'}>
            <Header />
            <Grid container spacing={1}>
                {
                    isDesktopOrLaptop && (
                        <>
                            <Grid item xs={5} >
                                <Item>
                                    <FireFeed />
                                </Item>
                            </Grid>

                            <Grid item xs={7}>
                                <Item>
                                    <Map />
                                </Item>
                            </Grid>
                        </>
                    )
                }
                {
                    isTabletOrMobile && (
                        <>
                            <Grid item xs={12}>
                                <Item>
                                    <FireFeed />
                                </Item>
                            </Grid>
                        </>
                    )
                }
            </Grid>
        </Container>
    )
}

export default Home