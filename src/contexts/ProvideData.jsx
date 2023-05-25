import React, { createContext, useState, useEffect, useContext } from "react";
import Papa from "papaparse";
import { useLocation } from "react-router-dom";
import { withFilter } from '@contexts/ProvideFilter'
import DemoFireData from "@assets/data/Fire.json";
import DemoNASAFireData from "@assets/data/nasafire.json";


export const withData = createContext(null)

const FIRE_DATA_URL = import.meta.env.VITE_FIRE_DATA_URL

export function ProvideData({ children }) {
    const [FireData, setFireData] = useState(DemoFireData);
    const { county } = useContext(withFilter)
    console.log(county)
    const location = useLocation()

    useEffect(() => {
        const response = fetch(FIRE_DATA_URL)
            .then((response) => response.text())
            .then((result) => Papa.parse(result, { header: true, }))
            .catch((err) => console.log(err));
        response.then((result) => setFireData(result.data));
        
    }, []);
    //TODO: Run every one hour

    const ContextValues = { FireData }

    return (
        <withData.Provider value={ContextValues}>
            {children}
        </withData.Provider>
    )
}
