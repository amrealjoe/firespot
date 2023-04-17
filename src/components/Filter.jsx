import React, { useState } from 'react';
import MuiButton from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import { ArrowDropDownRounded, ExpandLessRounded, ExpandMoreRounded } from '@mui/icons-material';
import Counties from "@assets/data/Counties.json";
import { createBrowserHistory } from "history"
import { useLocation } from "react-router-dom"
import Menu from './Menu';

import { useEffect } from 'react';

const Button = styled(MuiButton)`
    && {
        display: flex;
        text-transform: capitalize;
        color: #ffffffdd;
        border-color: #ffffffdd;
        padding-right: 24px;
        padding-left: 24px;
        gap: 12px;
        border-radius: 10px;
    }
    &&:hover {
        border-color: #ffffffdd;
    }
`
const ShowMore = styled(MuiButton)`
    && {
        text-transform: capitalize;
        min-width: 100%;
        text-align: center;
        border-radius: unset;
        border-top: thin solid lightgrey;
    }
`

function Filter() {
    const initCounty = window.localStorage.getItem('fire_county') ? window.localStorage.getItem('fire_county') : "Monsterrado"
    const [county, setCounty] = useState(initCounty)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };
    const location = useLocation()
    const [showMore, setShowMore] = useState(false)
    function handleShowMore() { setShowMore(!showMore)}

    useEffect(() => {
        let newCounty = window.localStorage.getItem('fire_county')
        if (newCounty) {setCounty(newCounty)}
        setCounty("Monsterrado")
    }, [location])

    useEffect(() => {
        window.localStorage.setItem('fire_county', county);
        setCounty(county)
    }, [county])

    let cur_index = 6

    return (
        <div>
            <Button
                variant='outlined'
                aria-controls={open ? 'filter-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {county}
                <ArrowDropDownRounded />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'filter-button',
                }}
            >
                {
                    !showMore && Counties.slice(0, 5).map((item, key) => (
                        <MenuItem key={key} onClick={() => {
                            setCounty(item.county)
                            handleClose()
                        }}>{item.county}</MenuItem>
                    ))
                }
                { showMore && Counties.slice(0, 15).map((item, key) => (
                        <MenuItem key={key} onClick={() => {
                            setCounty(item.county)
                            handleClose()
                        }}>{item.county}</MenuItem>
                    ))
                }
                <ShowMore onClick={handleShowMore} >
                    {
                        showMore ? <ExpandLessRounded />: <ExpandMoreRounded />
                    }
                    
                    
                </ShowMore>
            </Menu>
        </div>
    );
}

export default Filter