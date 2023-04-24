import React, { createContext, useState, useEffect } from "react";
import Papa from "papaparse";
import { useLocation } from "react-router-dom";
const url =
    "https://firms.modaps.eosdis.nasa.gov/api/country/csv/cdf3746fd8e186717bf4fafb16361b8a/VIIRS_SNPP_NRT/LBR/1";

export const withData = createContext(null)

export function ProvideData({ children }) {
    const [data, setData] = useState([]);
    const location = useLocation()
    useEffect(() => {
        const response = fetch(url)
            .then((response) => response.text())
            .then((v) =>
                Papa.parse(v, {
                    header: true,
                })
            )
            .catch((err) => console.log(err));
        response.then((v) => setData(...data, v.data));
    }, [location]);
    
    const ContextValues = {
        data
    }

    return (
        <withData.Provider value={ContextValues}>
            {children}
        </withData.Provider>
    )
}
