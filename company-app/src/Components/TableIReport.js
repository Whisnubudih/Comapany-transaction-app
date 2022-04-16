import React from 'react'


function TableIReport ({report}) {


  return (
    <tbody>
      <tr  className="table-row-2">
        <td  className="table-td">{report.name}</td>
        <td  className="table-td">{report.Item.name}</td>
        <td  className="table-td">{report.Company.name}</td>
        <td  className="table-td">{report.Transaction.name}</td>
        <td className="table-td">
          <div className="table-td-container">

            <img src={report.Transaction.file} className="img-table" alt="" />
          </div>
        </td>
        
       
      </tr>
    </tbody>
  )
   
}

  export default  TableIReport ;  