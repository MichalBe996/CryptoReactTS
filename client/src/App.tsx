import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import {Routes, Route, Navigate} from "react-router-dom"
import { Container } from "react-bootstrap"



function App() {
  return (
    <Container className="my-4">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    </Container>
    
  );
}

export default App;
