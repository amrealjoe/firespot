import { useState } from 'react'
import Navigation from '@/Navigation'
import { Routes, Outlet, Route } from "react-router-dom"
import Home from "@pages/Home"
import { ProvideFilter } from '@contexts/ProvideFilter'





function App() {

  return (
    <ProvideFilter>
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        <Outlet />
    </ProvideFilter>

  )
}

export default App
