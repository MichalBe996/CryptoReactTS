import React from 'react'


const TableComponent = () => {
  interface apiElement {
    name: string,
    symbol: string,
    quote: object

  }
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [apiData, setApiData] = React.useState<apiElement[]>([])
  
  React.useEffect(()=> {
    fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.REACT_APP_API_KEY}`)
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      setApiData(data)
    })

  }, [])
  console.log(apiData)
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