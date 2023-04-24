import { useState } from 'react'
import Navigation from '@/Navigation'
import { Routes, Outlet, Route } from "react-router-dom"
import Home from "@pages/Home"
import { ProvideFilter } from '@contexts/ProvideFilter'
import { ProvideData } from '@contexts/ProvideData'





function App() {

  return (
    <ProvideData>
      <ProvideFilter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Outlet />
      </ProvideFilter>
    </ProvideData>

  )
}

export default App
