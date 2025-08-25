import React from 'react'
import AdminNavbar from "../components/adminNavbar"
import { BarChart } from '@mui/x-charts'


const [apiData, setApiData] = React.useState([])

interface ApiElement {
  name: string,
  symbol: string
  price: number,
  percent1H: number,
  percetn24H: number
}

const getApiData = () => {

}


const AdminDash = () => {
  return (
    <div>
        <AdminNavbar/>
    </div>
  )
}

export default AdminDash