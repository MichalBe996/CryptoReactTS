import React from 'react'
import AdminNavbar from '../components/adminNavbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditCrypto = () => {
    
    
    const [singleCryptoData, setSingleCryptoData] = React.useState({})
    const [loading, setIsLoading] = React.useState(true)
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
        setIsLoading(false)
    }, [])
  return (
    loading ? <h1>Loading...</h1> :
    
    <div>
        <AdminNavbar/>
       <div>
            <p>singleCryptoData</p>
        </div>
    </div>
  )
}

export default EditCrypto