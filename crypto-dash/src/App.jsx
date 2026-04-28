import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import './App.css'

// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  
  return (
    <BrowserRouter>
        {/* Navbar */}
        <nav className='top-nav'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* Routes */}
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App