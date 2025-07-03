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
  const [keyToSort, setKeyToSort] = React.useState<string>()
  const [sortOrder, setSortOrder] = React.useState<string>("desc")
  const clickOnHeader = (header: any) => {
    if(keyToSort === header.key){
      sortOrder === "desc" ? setSortOrder("asc") : setSortOrder("desc")
    }else{
      setSortOrder("asc")
      setKeyToSort(header.key)  
    }
    
    
  }
  const [apiData, setApiData] = React.useState<apiElement[]>([
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 109436.10,
      percent1H: 1.4,
      percent24H: -1.6
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: 2463.83,
      percent1H: 1.4,
      percent24H: -2
    },
    {
      name: "Avalanche",
      symbol: "AVAX",
      price: 17.46,
      percent1H: -0.7,
      percent24H: -2
    },
    {
      name: "Cardano",
      symbol: "ADA",
      price: 0.56,
      percent1H: 1.4,
      percent24H: 7
    },

  ])

 
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
 
  const tableHeaders = [
    {key: "name", label: "Name"},
    
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
            return <td key={element.key} 
            onClick={()=>{clickOnHeader(element)}}>
              {element.label} {keyToSort===element.key ? sortOrder==="asc"? 
              <span className='up-arrow-visible'>▵</span>: 
              <span className='down-arrow-visible'>▿</span>:
              <span className='up-arrow-invisible'>▵</span>}</td>
          })}
          </tr>
          
          
        </thead>
        <tbody>
          {apiData.map((crypto)=>{
            return(
              <tr key={crypto.name}>
                <td>{`${crypto.name} • ${crypto.symbol}`}</td>
                
                <td>{crypto.price}</td>
                {crypto.percent1H > 0 ? <td className='td-green'>{crypto.percent1H}</td> : <td className='td-red'>{crypto.percent1H}</td>}
                {crypto.percent24H > 0 ? <td className='td-green'>{crypto.percent24H}</td> : <td className='td-red'>{crypto.percent24H}</td>}
                

              </tr>
            )
          })}
          </tbody>

      </table>

    </div>
  )
}

export default TableComponent