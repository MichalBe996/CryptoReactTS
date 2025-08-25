import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdminNavbar from '../components/adminNavbar'
import axios from 'axios'


const AddCrypto = () => {

    const navigate = useNavigate()


    const [newCryptoData, setNewCryptoData] = React.useState({
        name: "",
        symbol: "",
        price: 0,
        percent1h: 0,
        percent24h: 0

    })

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCryptoData({...newCryptoData,
            [e.target.id]: e.target.value
        })
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/api/v1/data", {
            name: newCryptoData.name,
            symbol: newCryptoData.symbol,
            price: newCryptoData.price,
            percent1H: newCryptoData.percent1h,
            percent24H: newCryptoData.percent24h
        }, {
            headers: {
                "Content-Type": "application/json",
                withCredentials: true,
            
            }
        })
        .then(res => console.log(res))
        .catch(error=> console.log(error))

        navigate("/crypto-mgmt")
    }
  return (
    <div>
        <AdminNavbar/>
        <div className='crypto-form-container'>
            <form className='admin-form' onSubmit={handleFormSubmit}>
                <span className='form-row'>
                    <label htmlFor='name'>Name:</label>
                    <input onChange={handleFormChange }id="name"/>
                </span>
                <span className='form-row'>
                    <label htmlFor='name'>Symbol:</label>
                    <input onChange={handleFormChange} id="symbol"/>
                </span>
                 <span className='form-row'>
                    <label htmlFor='price'>Price:</label>
                    <input onChange={handleFormChange} id="price" type='float'/>
                </span>
                <span className='form-row'>
                    <label htmlFor='percent1h'>Percent change last 1h:</label>
                    <input onChange={handleFormChange} id="percent1h" type='float'/>
                </span>
                <span className='form-row'>
                    <label htmlFor='percent24h'>Percent change last 24h:</label>
                    <input onChange={handleFormChange} id="percent24h" type='float'/>
                </span>

                <button className='submit-crypto-button' type='submit'>Submit</button>
                

            </form>

        </div>
    </div>
  )
}

export default AddCrypto