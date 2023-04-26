import React, {
    useContext,useEffect,
    useMemo, useReducer, useState
} from 'react'
import styled from "styled-components"
import Card from './firefeed/Card'
import { Button, CircularProgress, createTheme } from '@mui/material'
import { ExpandMoreRounded, LocalFireDepartmentRounded, LightModeRounded } from '@mui/icons-material'
import { withFilter } from '@contexts/ProvideFilter'
import "./firefeed/firefeed.css"
import { ButtonGroup, LoadMoreButton } from './firefeed/components'
import { FilterOption } from './firefeed/FilterOptions'
const url =
    "https://firms.modaps.eosdis.nasa.gov/api/country/csv/cdf3746fd8e186717bf4fafb16361b8a/VIIRS_SNPP_NRT/LBR/1";

import fetchData from '@helpers/fetchData'

const theme = createTheme()
//JSONS
import Fire from "@assets/data/Fire.json";

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin: 0 12px;
    position: relative;
`

const NothingFound = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
`

function reducer(state, action) {
    switch (action.type) {
        case "fire":
            return { selected: state.selected = "fire" }
        case "hotspot":
            return { selected: state.selected = "hotspot" }
        case "all":
            return { selected: state.selected = "all" }
        default:
            return state
    }
}


function FireFeed() {
    const [state, dispatch] = useReducer(reducer, { selected: "all" })
    const [showMore, setShowMore] = useState(false)
    const { county } = useContext(withFilter)
    const [empty, setEmpty] = useState(false)
    let option = FilterOption(state.selected)
    const [slice, setSlice] = useState(10)
    const [fireData, setFireData] = useState([])

    useEffect(() => {
        setFireData(fetchData())
    }, [])
    // const fireData = useMemo(() => fetchData(), [])
    const filteredFire = fireData.slice(0, slice)
    
    //TODO: REMOVE
    console.log(fireData)

    const handleShowMore = (e, data) => {
        setShowMore(true)
        setTimeout(() => {
            setShowMore(false)
            if (data.length === slice) {
                setSlice(data.length)
                setEmpty(true)
            } else {
                setSlice(slice + 5)
            }
        }, 1000);
        return
    }

    let FireData = useMemo(() => {
        let _data = Fire.filter((data) => { return data.county == county })
        if (_data == "") {
            dispatch({ type: "all" })
            return Fire
        }
        return _data
    }, [county])

    //FILTER FIREDATA
    let FilteredData = useMemo(() => FireData.slice(0, slice).filter(option), [FireData, option])

    return (
        <MainBox>
            <>
                <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="Filter-button"
                >
                    <Button
                        className={state.selected === "all" ? "active" : ""}
                        onClick={() => { dispatch({ type: "all" }) }}>All</Button>
                    <Button
                        className={state.selected === "fire" ? "active" : ""}
                        onClick={() => { dispatch({ type: "fire" }) }}
                        startIcon={<LocalFireDepartmentRounded />}> Active Fire</Button>
                    <Button
                        className={state.selected === "hotspot" ? "active" : ""}
                        onClick={() => { dispatch({ type: "hotspot" }) }}
                        startIcon={<LightModeRounded />}>Hotspot</Button>
                </ButtonGroup>
            </>
            {
                filteredFire.length > 0 ? (
                    filteredFire.map((data, key) => (
                        <Card
                            key={key}
                            county={data.county}
                            address={data.address}
                            lat={data.latitude}
                            lng={data.longitude}
                            status={data.status}
                            fire={data}
                            time={data.acq_time}
                            date={data.acq_date}
                            confidence={data.confidence}
                            frp={data.frp}
                        />
                    ))
                ) :
                    <NothingFound>
                        No {state.selected.toUpperCase()} found in {county} County.
                    </NothingFound>
            }

            {
                !empty && fireData.length > 5 && (
                    <>
                        <LoadMoreButton onClick={(e) => { handleShowMore(e, Fire) }}>
                            {
                                showMore ? <><CircularProgress sx={{ color: "white" }} /></> :
                                    <>Show More <ExpandMoreRounded /></>
                            }
                        </LoadMoreButton>
                    </>
                )
            }

        </MainBox>
    )
}

export default FireFeed