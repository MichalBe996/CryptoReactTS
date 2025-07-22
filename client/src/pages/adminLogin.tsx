import React from 'react'
import Navbar from '../components/Navbar'

const AdminLogin = () => {
    const [login, setLogin] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")
    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    
    }
     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    
    }
  return (
    <div>
        <Navbar/>
        <form className='admin-form'>
            <h2>Admin page</h2>
            <span className='form-row'>
                
                <label htmlFor='login'>Login:</label>
                <input id="login" onChange={handleLoginChange}/>
            </span>
            <span className='form-row'>
                <label htmlFor='password'>Password:</label>
                <input id="password"/>
            </span>
            
        </form>
    </div>
  )
}

export default AdminLogin