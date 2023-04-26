import React, { createContext, useState, useEffect } from "react";
import Papa from "papaparse";
import { useLocation } from "react-router-dom";
const url =
    "https://firms.modaps.eosdis.nasa.gov/api/country/csv/72af24ec4f81157ca8296b8e6a449685/VIIRS_SNPP_NRT/LBR/1";

export const withData = createContext(null)

export function ProvideData({ children }) {

    const [data, setData] = useState([]);
    const location = useLocation()

    useEffect(() => {
        const response = fetch(url)
            .then((response) => response.text())
            .then((result) => Papa.parse(result, { header: true, }))
            .catch((err) => console.log(err));
        response.then((result) => setData(result.data));

    }, [location]);

    const ContextValues = {data}

    return (
        <withData.Provider value={ContextValues}>
            {children}
        </withData.Provider>
    )
}
