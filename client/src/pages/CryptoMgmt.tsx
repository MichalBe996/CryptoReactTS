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
  const getApiData = async () => {
    await fetch("http://localhost:8080/api/v1/data/68778a798b138232fe78aed5", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      

      },
      
      
      
      

    })
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
    
  }


  React.useEffect(()=> {
    getApiData()
  }, [])
  const [cryptoData, setCryptoData] = React.useState<cryptoElement[]>([])
  return (
    <div>
        <AdminDash/>
    </div>
  )
}

export default CryptoMgmt