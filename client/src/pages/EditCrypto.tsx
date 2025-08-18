import React from 'react'
import AdminNavbar from '../components/adminNavbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditCrypto = () => {
    
   
    const [singleCryptoData, setSingleCryptoData] = React.useState<CryptoData>({
        name: "",
        price: 0,
        symbol: "",
        percent1H: 0,
        percent24H: 0,
        _id: "",
        __v: 0
    })
    const [isLoading, setIsLoading] = React.useState(true)
    const pageID = useParams()
    interface CryptoData { 
        name: string,
        price: number,
        symbol: string,
        percent1H: number,
        percent24H: number,
        _id: string,
        __v: number

    }

    
    
    React.useEffect(()=> {
        
        
        axios.get(`http://localhost:8080/api/v1/data/${pageID.id}`, {
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => setSingleCryptoData(response.data.data))
        .catch(error => console.log(error))
        setIsLoading(false)
        
        
    }, [])
    console.log(singleCryptoData)

    const handleFormChange = () => {

    }
    
    
    const handleFormSubmit = () => {

    }
    

    
  return (
    
    
    <div>
        <AdminNavbar/>
       <div className='edit-crypto-columns'>
            <div className='edit-crypto-current-data'>
                {
                    isLoading ? <p>Loading...</p>
                    
                : <div>     
                        <h3>id: {singleCryptoData._id}</h3>
                        <h3>Name: {singleCryptoData.name}</h3>
                        <h3>Symbol: {singleCryptoData.symbol}</h3>
                        <h3>Price: {singleCryptoData.price}</h3>
                        <h3>Percent change (1h): {singleCryptoData.percent1H}</h3>
                        <h3>Percent change (24h): {singleCryptoData.percent24H}</h3>
                    </div>
                }
                

            </div>
            <form className='edit-crypto-form'>
                <span className='form-row'>
                    <label htmlFor='name'>New name:</label>
                    <input id='name' /> 
                </span>
                <span className='form-row'>
                    <label htmlFor='symbol'>New symbol:</label>
                    <input id='symbol' /> 
                </span>
                <span className='form-row'>
                    <label htmlFor='price'>New price:</label>
                    <input id='name' /> 
                </span>
                <span className='form-row'>
                    <label htmlFor='percent1H'>New percent1H:</label>
                    <input id='percent1H' /> 
                </span>
                <span className='form-row'>
                    <label htmlFor='percent24H'>New percent24H:</label>
                    <input id='percent24H' /> 
                </span>
                

            </form>
        </div>
    </div>
  )
}

export default EditCrypto