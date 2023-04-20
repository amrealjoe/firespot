import { useState } from 'react'
import Navigation from '@/Navigation'
import { Routes, Outlet, Route } from "react-router-dom"
import Home from "@pages/Home"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Outlet />
    </>

  )
}

export default App
