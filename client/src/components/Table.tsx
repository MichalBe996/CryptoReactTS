import React from 'react'
import axios from 'axios'


const TableComponent = () => {
  interface apiElement {
    name: string,
    symbol: string,
    quote: object

  }

  const fetchData = async (apiKey:any) => {
    const response = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apiKey}`)
    console.log(response)
  }
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [apiData, setApiData] = React.useState<apiElement[]>([])
  
  React.useEffect(()=> {
    fetchData(process.env.REACT_APP_API_KEY)
    setIsLoading(false)
    

  }, [])
 
  const tableHeaders = [
    {key: "name", label: "Name"},
    {key: "symbol", label: "Symbol"},
    {key: "price", label: "Price (USD)"},
    {key: "quote.USD.percent_change_1h", label: "% change (1h)"},
    {key: "quote.USD.percent_change_24h", label: "% change (24h)"}
  ]
  return (
    isLoading ? <h2>Loading...</h2> : 

    <div className="table-body-div">
      <table>
        <thead>
          <tr>
            {tableHeaders.map((element)=>{
            return <td key={element.key}>{element.label}</td>
          })}
          </tr>
          
        </thead>

      </table>

    </div>
  )
}

export default TableComponent