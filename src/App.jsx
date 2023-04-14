import { useState } from 'react'
import Navigation from '@/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <h1>FIRESPOT</h1>
      <p>Fire Detection app for everyone</p>
    </>
  )
}

export default App
