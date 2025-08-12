import React from 'react'
import AdminNavbar from '../components/adminNavbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditCrypto = () => {
    
    
    const [singleCryptoData, setSingleCryptoData] = React.useState({})
    const {pageID} = useParams()
    
    React.useEffect(()=> {
        
        axios.get(`http://localhost:8080/api/v1/data/${pageID}`, {
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => setSingleCryptoData(response.data))
        .catch(error => console.log(error))
        
    }, [])
  return (
    
    
    <div>
        <AdminNavbar/>
       <div className='edit-crypto-columns'>
            <div className='edit-crypto-current-data'>
                <h3>singleCryptoData.name</h3>
                <h3>singleCryptoData.symbol</h3>

            </div>
            <form className='edit-crypto-form'>

            </form>
        </div>
    </div>
  )
}

export default EditCrypto