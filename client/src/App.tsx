import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"
import "react-bootstrap"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<h1>Test dashboards</h1>}/>
    </Routes>
    </>
    
  );
}

export default App;
