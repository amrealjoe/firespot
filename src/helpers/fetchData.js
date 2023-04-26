import React, { createContext, useState } from "react";
import Papa from "papaparse";
const url =
  "https://firms.modaps.eosdis.nasa.gov/api/country/csv/72af24ec4f81157ca8296b8e6a449685/VIIRS_SNPP_NRT/LBR/1";

export const withData = createContext(null);

function fetchData() {
    // const [data, setData] = useState([]);
    let data = []
  const response = fetch(url)
    .then((response) => response.text())
    .then((result) => Papa.parse(result, { header: true }))
    .catch((err) => console.log(err));
  response.then((result) => data = result.data);
  return data;
}

export default fetchData
