import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'





const Dashboard = () => {
  const [pageLoading, setPageLoading] = React.useState<boolean>(true)
  const apiUrl = "http://localhost:8080/api/v1/data"
  const [apiData, setApiData] = React.useState([])
  const getApiData = (url: string) => {

  axios.get(url, {
    headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }

  } )
  .then(res => setApiData(res.data.data))
  .catch(err=> console.log(err))
  setPageLoading(false)

}

React.useEffect(()=> {
  getApiData(apiUrl)
}, [])
  return ( pageLoading? <h1>Loading...</h1> :
    <div>
        <Navbar/>
    </div>
  )
}

export default Dashboard