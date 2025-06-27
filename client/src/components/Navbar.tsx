import React from 'react'
import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    function navigateHome() {
        navigate("/")
    }
    function navigateDash(){
        navigate("/dashboard")
    }

  return (
    <nav className='navbar'>
        <div className='logo-div'>
            <h1>LOGO placeholder</h1>
        </div>
        <div className="nav-buttons">
            <button onClick={navigateHome}>Home</button>
            <button onClick={navigateDash}>Dashboard</button>
            <button>About</button>
        </div>

    </nav>
  )
}

export default Navbar