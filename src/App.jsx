import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About"
import Home from "./components/Home"
import Vans from "./components/Vans"
import VanDetail from './components/VanDetail';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard'
import Reviews from './components/Reviews'
import Income from './components/Income'
import HostLayout from './components/HostLayout';

import "./server"
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="vans" element={<Vans/>} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="/host" element={<HostLayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="income" element={<Income/>} />
              <Route path="reviews" element={<Reviews/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
