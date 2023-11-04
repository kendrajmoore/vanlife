import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About.jsx"
import Home from "./components/Home.jsx"
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/">#VANLIFE</Link>
            <Link to="about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
