import React from 'react'
import AdminDash from './AdminDash'
import axios from 'axios'

const CryptoMgmt = () => {
  interface cryptoElement {
      _id: string,
      name: string,
      symbol: string,
      price: number,
      percent1h: number,
      percent24h: number,
    


  }
  const getApiData = () => {
    axios.get("http://localhost:8080/api/v1/data", {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then((response) => console.log(response))
    .catch((error)=> console.log(error))
  }


  React.useEffect(()=> {
    getApiData();
  }, [])
  const [cryptoData, setCryptoData] = React.useState<cryptoElement[]>([])
  return (
    <div>
        <AdminDash/>
    </div>
  )
}

export default CryptoMgmt