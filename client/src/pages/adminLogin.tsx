import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

const AdminLogin = () => {
    const [login, setLogin] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")
    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    
    }
     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    
    }

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`THIS ARE YOUR CREDENTIALS - LOGIN: ${login}, PASSWORD: ${password}`)
    }
  return (
    <div>
        <Navbar/>
        <form className='admin-form' onSubmit={handleFormSubmit}>
            <h2>Admin page</h2>
            <span className='form-row'>
                
                <label htmlFor='login'>Login:</label>
                <input id="login" onChange={handleLoginChange}/>
            </span>
            <span className='form-row'>
                <label htmlFor='password'>Password:</label>
                <input type='password' id="password" onChange={handlePasswordChange}/>
            </span>

            <button className='submit-button' type='submit'>Submit</button>
            
        </form>
    </div>
  )
}

export default AdminLogin