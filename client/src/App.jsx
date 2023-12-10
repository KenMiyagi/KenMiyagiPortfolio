import { useState } from 'react'
import React from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home"
import Navbar from "./Components/NavBar/NavBar"
function App() {

  return (
      <div data-bs-theme="dark">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
  )
}

export default App
