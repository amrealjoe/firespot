import React, { useState, useCallback, useContext, useEffect } from 'react'
import styled from 'styled-components'
import "./css/maps.css"
//TODO: use .env variable for api key
const API_KEY = import.meta.env.VITE_MAP_API_KEY
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import Spinner from "@/Spinner"
import { useLocation } from 'react-router-dom'
import fetchData from '@helpers/fetchData'
import { LocalFireDepartment } from '@mui/icons-material'
import { withMaker } from '@contexts/ProvideMarker'
import { withData } from '@contexts/ProvideData'
import { useSearchParams } from 'react-router-dom'

//STYLED COMPONENTS
const MapBox = styled.div`
    width: 660px;
    height: 500px;
`

const ContainerStyle = {
    width: '101%',
    height: '105%'
};

const center = { lat: 6.428055, lng: -9.429499 }
const lat = 6.428055
const lng = -9.429499
const zoom = 7.5

export default function GMap() {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY });
    if (!isLoaded) { return <Spinner />; }
  return (
      <GoogleMap
          mapContainerStyle={ContainerStyle}
          center={center}
          zoom={zoom}
        //   onLoad={onLoad}
      >
          <Marker
              position={{
                  lat: parseInt(lat),
                  lng: parseInt(lng)
              }}
              icon={""}
          />
      </GoogleMap>
  )
}
