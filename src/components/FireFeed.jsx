import React from 'react'
import Papa from "papaparse"
import { useState } from 'react'
import { useEffect } from 'react'
import styled from "styled-components"
import { useLocation } from 'react-router-dom'
const url = "https://firms.modaps.eosdis.nasa.gov/api/country/csv/cdf3746fd8e186717bf4fafb16361b8a/VIIRS_SNPP_NRT/LBR/1"
import Card from './firefeed/Card'
import { Button, CircularProgress } from '@mui/material'
import { ExpandMoreRounded } from '@mui/icons-material'

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
    const location = useLocation()
    const [data, setData] = useState([])
    useEffect(() => {
        const response = fetch(url)
            .then(response => response.text())
            .then(v => Papa.parse(v, {
                header: true,
            }))
            .catch(err => console.log(err))
        response.then(v => setData(...data, v.data))
    }, [location])

    const handleShowMore = () => {
        setShowMore(true)
        setTimeout(() => {
            setShowMore(false)
            return
        }, 3000);
        return
    }

    return (
        <MainBox>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <LoadMore onClick={handleShowMore}>
                {
                    showMore ? <><CircularProgress sx={{ color: "white"}} /></> :
                        <>Show More <ExpandMoreRounded /></>
                }
            </LoadMore>
            {/* {
                data.map(item => (
                    <Block>
                        <Small>Date: {item?.acq_date}</Small>
                        <Small>Time: {item?.acq_time}</Small>
                        <Small>Bright ti4 {item?.bright_ti4}</Small>
                        <Small>Bright ti5 {item?.bright_ti5}</Small>
                        <Small>Confidence: {item?.confidence}</Small>
                        <Small>Country ID: {item?.country_id}</Small>
                        <Small>Day Night{item?.daynight}</Small>
                        <Small>FRP: {item?.frp}</Small>
                        <Small>Instrument: {item?.instrument}</Small>
                        <Small>Latitude: {item?.latitude}</Small>
                        <Small>Longitude: {item?.longitude}</Small>
                        <Small>Satelite: {item?.satellite}</Small>
                        <Small>Scan: {item?.scan}</Small>
                        <Small>Track: {item?.track}</Small>
                        <Small>Version: {item?.version}</Small>
                    </Block>
                ))
            } */}
        </MainBox>
    )
}

export default FireFeed