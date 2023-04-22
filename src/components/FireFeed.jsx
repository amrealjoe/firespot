import React, { useContext } from 'react'
import { useState } from 'react'
import styled from "styled-components"
import Card from './firefeed/Card'
import { Button, CircularProgress } from '@mui/material'
import { ExpandMoreRounded } from '@mui/icons-material'
import { HotspotMarker } from './Markers'
import { ProvideFilter, withFilter } from '@contexts/ProvideFilter'

//JSONS
import Fire from "@assets/data/Fire.json";

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin: 0 12px;
    position: relative;
`

const LoadMore = styled(Button)`
    && {
        min-height: 100%;
        padding: 12px;
        text-align: center;
        background-color: #040404;
        text-transform: capitalize;
        color: #d5d5d5;
        border-radius: unset;
    }
    &&:hover {
        background-color: #040404;
    }
`
function FireFeed() {
    const [showMore, setShowMore] = useState(false)
    const { county } = useContext(withFilter)
    const [slice, setSlice] = useState(5)


    const handleShowMore = (e, data) => {
        setShowMore(true)
        setTimeout(() => {
            setShowMore(false)
            if (data.length === slice) {
                setSlice(data.length)
            } else {
                setSlice(slice + 5)
            }
        }, 3000);
        return
    }
    // const handleShowMore = () => {
    //     setShowMore(true)
    //     setTimeout(() => {
    //         setShowMore(false)
    //         return
    //     }, 3000);
    //     return
    // }

    function filterByFire(data) {
        return data.status == true
    }
    function filterByHotspot(data) {
        return data.status == false
    }
    function filterByCounty(data) {
        return data.county == county
    }


    return (
        <MainBox>
            {
                Fire.slice(0, slice).map((data, key) => (
                    <Card
                        key={key}
                        county={data.county}
                        address={data.address}
                        lat={data.lat}
                        lng={data.lng}
                        status={data.status}
                    />
                ))
            }

            <LoadMore onClick={(e) => {
                handleShowMore(e, Fire)
            }}>
                {
                    showMore ? <><CircularProgress sx={{ color: "white" }} /></> :
                        <>Show More <ExpandMoreRounded /></>
                }
            </LoadMore>
        </MainBox>
    )
}

export default FireFeed