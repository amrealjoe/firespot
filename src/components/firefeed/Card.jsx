import React from 'react'
import {
    LocalFireDepartmentRounded,
    LocationOn, ShareRounded } from '@mui/icons-material'
import MainBox, {
    ActiveFire, Button, HeadBox, Hotspot,
    IconWrap, Location, Stack
} from './components'


function Card() {

    const handleShare = () => {
        navigator.share({
            url: "this url",
            title: "The title",
            text: "The body"
        })
    }

    return (
        <>
            <MainBox>
                <HeadBox>
                    <Button variant='contained'>
                        <ActiveFire>
                            <LocalFireDepartmentRounded />
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
                    <Button variant='contained' onClick={handleShare}>
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