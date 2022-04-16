import React, {useEffect} from 'react'

import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { fetchTransaction } from '../store/actionCreator';
import TableTransaction from '../Components/TableTransaction';


function Transaction(){
  const navigate = useNavigate()
  const { transactions} = useSelector((state) => state.transactionReducer);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransaction());
  }, []);

  
  const addTransaction = () =>{
    navigate(`/addtransaction`)
  }

  
  return (
    <section>
         <NavbarHome />
    <div className="home">
      <h2>TRANSACTION LIST</h2>
    <button onClick={() => {
            addTransaction()
          }} className="nav-button" >
            <p className="table-button-text">
              Add New Transaction
            </p>
          </button>
    <div className="table">
    <table>
        <thead>

        <tr className="table-row-1" >
          <th className="table-th">NAMA TRANSAKSI</th>
          <th className="table-th">NAMA BARANG</th>
          <th className="table-th">DATE</th>
          <th className="table-th">NAMA BARANG</th>
          <th className="table-th">ACTION</th>
        </tr>
        </thead>

    
        
   

      {transactions.map((transaction) =>(
                      <TableTransaction  key={transaction.id} transaction={transaction} />

                    ))}
       
       
     
    </table>
  </div>
  </div>
    </section>
  )
}

export default Transaction;
