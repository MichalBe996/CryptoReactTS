import React from 'react'
import mainLogo from "../assets/income_8225282.png"

const AdminNavbar = () => {
  return (
    <header className='navbar'>
        <div className='logo-name'>
            <img src={mainLogo} alt="logo" className='logo'/>   
            <h3 className='page-name'>CryptoTSR</h3>
            <nav>
            <ul className='nav--links'>
                <li><a href="/">Home</a></li>
                <li><a href="/account-mgmt">Account Mgmt</a></li>
                <li><a href="/crypto-mgmt">Crypto Mgmt</a></li>
                <button className='logout-button'>Logout</button>
                
            </ul>
        </nav>
        </div>
    </header>
  )
}

export default AdminNavbar