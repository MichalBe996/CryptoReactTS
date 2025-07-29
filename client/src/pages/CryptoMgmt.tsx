import React from 'react'
import axios from 'axios'
import AdminNavbar from '../components/adminNavbar'
import editIcon from "../assets/icons8-edit-100.png"
import deleteIcon from "../assets/icons8-delete-100.png"

const CryptoMgmt = () => {
  const adminTableHeaders = [
    {key: "name", label: "Name"},
    {key: "symbol", label: "Symbol"},
    {key: "price", label: "Price (USD)"},
    {key: "edit", label: "Edit"},
    {key: "delete", label: "Delete"}

  ]
  interface cryptoElement {
      _id: string,
      name: string,
      symbol: string,
      price: number,
      percent1h: number,
      percent24h: number,
      __v: number
    


  }
  const getApiData = () => {
    axios.get("http://localhost:8080/api/v1/data", {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then((response) =>setCryptoData(response.data.data))
    .catch((error)=> console.log(error))
  }


  React.useEffect(()=> {
    getApiData();
  }, [])
  const [cryptoData, setCryptoData] = React.useState<cryptoElement[]>([])
  return (
    <div>
        <AdminNavbar/>
        <div className='admin-crypto-table-container'>
          <table className='admin-crypto-table'>
            <thead>
            <tr>
              {adminTableHeaders.map((element)=>{
                return <td key={element.key}>{element.label}</td>
              })}
            </tr>
            </thead>
            <tbody>
              {cryptoData.map((element)=> {
                return <tr>
                  <td>{element.name}</td>
                  <td>{element.symbol}</td>
                  <td>{element.price}</td>
                  <td><img className="admin-icon"src={editIcon}/></td>
                  <td><img className="admin-icon" src={deleteIcon}/></td>
                
                </tr>
              })}
            </tbody>
        </table>
        </div>
       
    </div>
  )
}

export default CryptoMgmt