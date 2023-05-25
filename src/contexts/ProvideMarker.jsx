import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const withMaker = createContext(null)

export function ProvideMarker({ children }) {
    const [zoom, setZoom] = useState(7.5)
    const [ctxLat, setCtxLat] = useState("")
    const [ctxLng, setCtxLng] = useState("")
    const [ctxCenter, setCtxCenter] = useState({ lat: ctxLat, lng: ctxLng })


    const VALUES = {
        zoom,
        setZoom,
        ctxLat,
        setCtxLat,
        ctxLng,
        setCtxLng,
        ctxCenter,
        setCtxCenter
    }
  return (
    <withMaker.Provider value={VALUES}>
      {children}
    </withMaker.Provider>
  )
}
