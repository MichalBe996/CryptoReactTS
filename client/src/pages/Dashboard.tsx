import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { BarChart } from '@mui/x-charts'





const Dashboard = () => {
  const [pageLoading, setPageLoading] = React.useState<boolean>(true)
  const apiUrl = "http://localhost:8080/api/v1/data"
  const [apiData, setApiData] = React.useState([])
  const [cryptoNames, setCryptoNames] = React.useState<string[]>([])
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
        <BarChart 
        xAxis={[
          {
          id: "cryptoNames",
          data: ["test1", "test2", "test3"],
          
          
          
        }
          


        ]}
        series={[
          {
            data: [2, 5, 3],
            color: "#51158C",
            
          
          },
          
        ]}
        
        height={300}
        width={500}
        borderRadius={10}
        sx={{
    //change left yAxis label styles
   "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
    strokeWidth:"0.4",
    fill:"white",
    stroke: "white"
   },
   // change all labels fontFamily shown on both xAxis and yAxis
   "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel":{
       fontFamily: "Roboto",
    },
    // change bottom label styles
    "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
        strokeWidth:"0.5",
        fill: "white"
     },
      // bottomAxis Line Styles
     "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
      stroke: "white",
      strokeWidth:0.4
     },
     // leftAxis Line Styles
     "& .MuiChartsAxis-left .MuiChartsAxis-line":{
      stroke:"white",
      fill: "white",
      strokeWidth:0.4
     }
  }}
        
        />
        
    </div>
  )
}

export default Dashboard