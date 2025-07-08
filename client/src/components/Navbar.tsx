import React from 'react'
import mainLogo from "../assets/income_8225282.png"


const Navbar = () => {
    
   
  return (
    <header className='navbar'>
        <div className='logo-name'>
            <img src={mainLogo} alt="logo" className='logo'/>   
            <h3 className='page-name'>CryptoTSR</h3>
        </div>
        
        <nav>
            <ul className='nav--links'>
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>

    </header>
  )
}

export default Navbar