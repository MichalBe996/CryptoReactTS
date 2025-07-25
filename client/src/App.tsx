import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import AdminLogin from './pages/adminLogin';
import AdminDash from './pages/AdminDash';
import AccountMgmt from './pages/AccountMgmt';
import CryptoMgmt from './pages/CryptoMgmt';
import {Routes, Route, Navigate} from "react-router-dom"

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
        <Route path="/admin-dash" element={<AdminDash/>}/>
        <Route path="/account-mgmt" element={<AccountMgmt/>}/>
        <Route path="/crypto-mgmt" element={<CryptoMgmt/>}/>
        
      </Route>

      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
    </>
    
  );
}

export default App;
