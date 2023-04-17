import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import styled from "styled-components"
import Paper from '@mui/material/Paper';
import FireFeed from '@/FireFeed';
import { Box, Container } from '@mui/material';
import Map from '@/Map';
import MediaQuery from "react-responsive";
import { useMediaQuery } from 'react-responsive'
import Header from '@/Header';
import Notice from '@/Notice';

const MainBox = styled(Container)`
    && {
        position: relative;
    }
`

const FeedBox = styled.div`
    background-color: transparent;
    min-height: 180vh;
`
const MapBox = styled.div`
    background-color: transparent;
    border: thin solid lightgray;
    min-height: 80vh;
    position: sticky;
    right: 0;
    top:0;
`

function Home() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [notice, setNotice] = useState(true)

    useEffect(() => {
        const stopSeeingNotice = window.localStorage.getItem("stopSeeingNotice")
        if (stopSeeingNotice === "true") {
            setNotice(false)
        }
        setNotice(true)
    }, [])

    function dontShowNotice() {
        setNotice(false)
        window.localStorage.setItem("stopSeeingNotice", "false")
    }
    



    return (
        <MainBox maxWidth={'lg'}>
            {
                notice && <Notice dontShowNotice={dontShowNotice} />
            }
            
            <Header />
            <Grid container spacing={1}>
                {
                    isDesktopOrLaptop && (
                        <>
                            <Grid item xs={5} >
                                <FeedBox>
                                    <FireFeed />
                                </FeedBox>
                            </Grid>

                            <Grid item xs={7}>
                                <MapBox>
                                    <Map />
                                </MapBox>
                            </Grid>
                        </>
                    )
                }
                {
                    isTabletOrMobile && (
                        <>
                            <Grid item xs={12}>
                                <FeedBox>
                                    <FireFeed />
                                </FeedBox>
                            </Grid>
                        </>
                    )
                }
            </Grid>
        </MainBox>
    )
}

export default Home