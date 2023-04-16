import React, { useState } from 'react';
import MuiButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import { ArrowDropDownRounded } from '@mui/icons-material';
import Counties from "@assets/data/Counties.json";
import { createBrowserHistory } from "history"
import { useLocation } from "react-router-dom"

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

function Filter() {
    const [anchorEl, setAnchorEl] = useState(null);
    const initCounty = window.localStorage.getItem('fire_county') ? window.localStorage.getItem('fire_county') : "Monsterrado"
    const [county, setCounty] = useState(initCounty)
    const open = Boolean(anchorEl);
    const handleClick = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };
    const location = useLocation()

    useEffect(() => {
        let newCounty = window.localStorage.getItem('fire_county')
        console.log("New County:" + newCounty)
        if (newCounty) {setCounty(newCounty)}
        setCounty("Monsterrado")
    }, [location])

    useEffect(() => {
        window.localStorage.setItem('fire_county', county);
        setCounty(county)
    }, [county])

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
                    Counties.map((item, key) => (
                        <MenuItem key={key} onClick={() => {
                            setCounty(item.county)
                            handleClose()
                        }}>{item.county}</MenuItem>
                    ))
                }
            </Menu>
        </div>
    );
}

export default Filter