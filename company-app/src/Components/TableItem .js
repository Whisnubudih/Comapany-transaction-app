import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {productDeleteSucces} from '../store/actionCreator'

function TableItem ({product}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
//   const formatDate =() => {
//     // console.log(this.history.createdAt)
//     let timeData = new Date(product.datePurchase) 
//     const timeDate = timeData.getDate()
//     const timeMonth = timeData.getMonth() + 1
//     const timeYear = timeData.getFullYear()
//     return `${timeDate}-${timeMonth}-${timeYear}`
// }

// const formatRupiah = (amount) => {
//   return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
// };


const deleteItemHandler = (id) =>{
  console.log(id)
    fetch(`https://company-transaction-server.herokuapp.com/item/${id}`, {
        method: 'DELETE',  
        headers: {
          access_token: localStorage.getItem('access_token')
        }, 
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success delete');
        dispatch(productDeleteSucces(id))
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
const editItemHandler = (id) =>{
  navigate(`/edititem/${id}`)
}
  return (
    <tbody>
      <tr  className="table-row-2">
        <td  className="table-td">{product.name}</td>
        {/* <td  className="table-td">{formatDate()}</td>
        <td  className="table-td">{formatRupiah(product.amount)}</td>
        <td  className="table-td">{product.status}</td> */}
        {/* <td className="table-td">
          <div className="table-td-container">

            <img src={product.receipt} className="img-table" alt="" />
          </div>
        </td> */}
        
        <td className="table-td1">
          <button onClick={() => {
            editItemHandler(product.id)
          }} className="table-button1" >
            <p className="table-button-text">
              Edit
            </p>
          </button>
          <button onClick={() => {
            deleteItemHandler(product.id)
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

  export default  TableItem ;  