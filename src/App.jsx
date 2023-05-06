import { useState } from 'react'
import Navigation from '@/Navigation'
import { Routes, Outlet, Route } from "react-router-dom"
import Home from "@pages/Home"
import { ProvideFilter } from '@contexts/ProvideFilter'
import { ProvideData } from '@contexts/ProvideData'
import { ProvideModal } from '@contexts/ProvideModal'
import { ProvideMarker } from '@contexts/ProvideMarker'

function App() {

  return (
    <ProvideData>
      <ProvideFilter>
        <ProvideModal>
          <Navigation />
          <ProvideMarker>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Outlet />
          </ProvideMarker>
        </ProvideModal>
      </ProvideFilter>
    </ProvideData>

  )
}

export default App
