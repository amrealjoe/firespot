import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import styled from "styled-components"
import Paper from '@mui/material/Paper';
import FireFeed from '@/FireFeed';
import { Box, Container } from '@mui/material';
import Map from '@/Map';

const Item = styled(Paper)`
    && {
        min-height: 780px;
    }
`

function Home() {
    return (
        <Container maxWidth={'lg'}>
            <h1>Header is coming here</h1>
            <Grid container spacing={1}>
                <Grid item xs={5}>
                    <Item>
                        <FireFeed />
                    </Item>
                </Grid>
                <Grid item xs={7}>
                    <Item>
                        <Map />
                    </Item>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home