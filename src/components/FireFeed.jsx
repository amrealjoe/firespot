import React, { useContext, useMemo, useReducer, useState } from 'react'
import styled from "styled-components"
import Card from './firefeed/Card'
import { Button, CircularProgress, createTheme } from '@mui/material'
import { ExpandMoreRounded, LocalFireDepartmentRounded, LightModeRounded } from '@mui/icons-material'
import { HotspotMarker } from './Markers'
import { withFilter } from '@contexts/ProvideFilter'
import { ButtonGroup, LoadMoreButton } from './firefeed/components'
import { FilterOption } from './firefeed/FilterOptions'
import "./firefeed/firefeed.css"
import { withData } from '@contexts/ProvideData'

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

    const { FireData } = useContext(withData)
    console.log(FireData)

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
                FireData.length > 0 ? (
                    FireData.map((data, key) => (
                        <Card
                            key={key}
                            status={true}
                            details={data}
                        />
                    ))
                ) :
                    <NothingFound>
                        No {state.selected.toUpperCase()} found in {county} County.
                    </NothingFound>
            }

            {
                !empty && FireData.length > 5 && (
                    <LoadMoreButton onClick={(e) => { handleShowMore(e, Fire) }}>
                        {
                            showMore ? <><CircularProgress sx={{ color: "white" }} /></> :
                                <>Show More <ExpandMoreRounded /></>
                        }
                    </LoadMoreButton>
                )
            }

        </MainBox>
    )
}

export default FireFeed