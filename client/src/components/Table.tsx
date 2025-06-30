import React from 'react'


const TableComponent = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const tableHeaders = [
    {key: "col1", label: "col1"},
    {key: "col2", label: "col2"},
    {key: "col3", label: "col3"},
    {key: "col4", label: "col4"},
    {key: "col5", label: "col5"}
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