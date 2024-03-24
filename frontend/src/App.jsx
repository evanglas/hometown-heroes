import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import RegisterHero from './pages/RegisterHero.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register-hero" element={<RegisterHero />} />
    </Routes>
  )
}

export default App