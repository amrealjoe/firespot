import React, { createContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const withFilter = createContext(null)

export function ProvideFilter({ children }) {
    const initCounty = window.localStorage.getItem('fire_county')
        ? window.localStorage.getItem('fire_county') : "Monsterrado"
    const [county, setCounty] = useState(initCounty)
    const location = useLocation()

    useEffect(() => {
        let newCounty = window.localStorage.getItem('fire_county')
        if (newCounty) { setCounty(newCounty) } 
        setCounty("Monsterrado")
    }, [location])

    useEffect(() => {
        window.localStorage.setItem('fire_county', county);
        setCounty(county)
    }, [county])

    const contextValues = {
        county,
        setCounty
    }
  return (
      <withFilter.Provider value={contextValues}>
          {children}
      </withFilter.Provider>
  )
}

export default ProvideFilter