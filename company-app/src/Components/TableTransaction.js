import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {transactionDeleteSucces} from '../store/actionCreator'

function TableTransaction ({transaction}) {
  console.log(transaction)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formatDate =() => {
    // console.log(this.history.createdAt)
    let timeData = new Date(transaction.date) 
    const timeDate = timeData.getDate()
    const timeMonth = timeData.getMonth() + 1
    const timeYear = timeData.getFullYear()
    return `${timeDate}-${timeMonth}-${timeYear}`
}




const deleteTransactionHandler = (id) =>{
  console.log(id)
    fetch(`http://localhost:10000/transaction/${id}`, {
        method: 'DELETE',  
        headers: {
          access_token: localStorage.getItem('access_token')
        }, 
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success delete');
        dispatch(transactionDeleteSucces(id))
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
const editTransactionHandler = (id) =>{
  navigate(`/edittransaction/${id}`)
}
  return (
    <tbody>
      <tr  className="table-row-2">
        <td  className="table-td">{transaction.name}</td>
        <td  className="table-td">{transaction.Item.name}</td>
        <td  className="table-td">{formatDate()}</td>
        <td  className="table-td">{transaction.Company.name}</td>
        
        
        
        
        <td className="table-td1">
          <button onClick={() => {
            editTransactionHandler(transaction.id)
          }} className="table-button1" >
            <p className="table-button-text">
              Edit
            </p>
          </button>
          <button onClick={() => {
            deleteTransactionHandler(transaction.id)
          }} className="table-button2" >
            <p className="table-button-text">
              Delete
            </p>
          </button>
          </td>
      </tr>
    </tbody>
  )
   
}

  export default  TableTransaction ;  