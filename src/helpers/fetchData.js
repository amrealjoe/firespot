import React, { createContext, useState } from "react";
import Papa from "papaparse";
const url = import.meta.env.VITE_FIRE_DATA_URL;

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
