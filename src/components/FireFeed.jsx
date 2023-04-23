import React, { useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import styled from "styled-components"
import Card from './firefeed/Card'
import { Button, CircularProgress, createTheme } from '@mui/material'
import { ExpandMoreRounded, LocalFireDepartmentRounded, LightModeRounded } from '@mui/icons-material'
import { HotspotMarker } from './Markers'
import { withFilter } from '@contexts/ProvideFilter'
import "./firefeed/firefeed.css"
import { ButtonGroup, LoadMoreButton } from './firefeed/components'
import { FilterOption } from './firefeed/FilterOptions'

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
                FilteredData.length > 0 ? (
                    FilteredData.map((data, key) => (
                        <Card
                            key={key}
                            county={data.county}
                            address={data.address}
                            lat={data.lat}
                            lng={data.lng}
                            status={data.status}
                        />
                        ))
                ) : 
                    <NothingFound>
                        No {state.selected.toUpperCase()} found in {county} County.
                    </NothingFound>
            }

            {
                !empty && FireData.length > 5 && (
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