import React from 'react'
import mainLogo from "../assets/income_8225282.png"
import Cookies from 'js-cookie'

const AdminNavbar = () => {
  const logout = () => {
    Cookies.remove("user")
    window.location.reload()
  }
  return (
    <header className='navbar'>
        <div className='logo-name'>
            <img src={mainLogo} alt="logo" className='logo'/>   
            <h3 className='page-name'>CryptoTSR</h3>
            <nav>
            <ul className='nav--links--admin'>
                <li><a href="/">Home</a></li>
                <li><a href="/account-mgmt">Account Mgmt</a></li>
                <li><a href="/crypto-mgmt">Crypto Mgmt</a></li>
                <li><a href="/add-crypto">Add Crypto</a></li>
                <button className='logout-button' onClick={()=>{
                  logout()
                }}>Logout</button>
                
            </ul>
        </nav>
        </div>
    </header>
  )
}

export default AdminNavbar