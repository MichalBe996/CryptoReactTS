import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'

const AdminLogin = () => {
    const [login, setLogin] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")
    const navigate = useNavigate()
    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    
    }
     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/users/login", {
            email: login,
            password: password
        },
    {
        headers: {
            "Content-Type": "application/json",
            withCredentials: true,
            
        }
    })
    .then(res => Cookies.set("user", res.data.token, {expires: 7}))
    .catch(error => console.log(error))
    navigate("/crypto-mgmt")
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