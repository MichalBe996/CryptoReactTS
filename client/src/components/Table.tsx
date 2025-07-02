import React from 'react'
import axios from 'axios'


const TableComponent = () => {
  interface apiElement {
    name: string,
    symbol: string,
    price: number,
    percent1H: number,
    percent24H: number
  }
  const [apiData, setApiData] = React.useState<apiElement[]>([
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 24000,
      percent1H: 1.4,
      percent24H: -2
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 24000,
      percent1H: 1.4,
      percent24H: -2
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 24000,
      percent1H: 1.4,
      percent24H: -2
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 24000,
      percent1H: 1.4,
      percent24H: -2
    },

  ])

 
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
 
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
          <tbody>

          </tbody>
          
        </thead>

      </table>

    </div>
  )
}

export default TableComponent