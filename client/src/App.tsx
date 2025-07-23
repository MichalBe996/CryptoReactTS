import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import AdminLogin from './pages/adminLogin';
import CryptoRegister from './pages/CryptoRegister';
import {Routes, Route, Navigate} from "react-router-dom"
import { Container } from "react-bootstrap"
import ProtectedRoutes from './pages/ProtectedRoutes';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/adminLogin" element={<AdminLogin/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/crypto-register" element={<CryptoRegister/>}/>
      </Route>

      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    </>
    
  );
}

export default App;
