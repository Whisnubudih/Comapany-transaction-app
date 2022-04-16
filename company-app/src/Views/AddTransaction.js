import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { addTransaction } from '../store/actionCreator'
import { useDispatch, useSelector } from 'react-redux';
import errorAlert from '../hooks/errorAlert';
import successAlert from '../hooks/successAlert';
import { fetchProducts } from '../store/actionCreator';
import { fetchCompanies } from '../store/actionCreator';



function AddItem() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.itemReducer);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { companies } = useSelector((state) => state.companyReducer);
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);
  const [transactionForm, setTransactionForm] = useState({
    name: '',
    total: '',
    date: '',
    file: '',
    ItemId: "",
    CompanyId: "",

  })
  let formData = new FormData
  const changeTransactionFormInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setTransactionForm({
      ...transactionForm,
      [field]: value
    })
  }

  const addNewTransaction = () => {
    dispatch(addTransaction(transactionForm))
      .then(() => {
        successAlert('Success add new transaction');
        navigate('/transaction');
      })
      .catch((err) => {
        console.log(err);
        if (err == 'Error: Bad Request') {
          errorAlert(err, 'Please input field data');
        } else {
          errorAlert(err, 'PLeease fill the blank');
        }
      });
  };

  return (
    <section>

      <NavbarHome />


      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> New TRANSACTIONS</h2>
          </div>
          <form className="form-add" onSubmit={(e) => {
            e.preventDefault()
            addNewTransaction()
          }} >
            <div className="input-add">
              <label className="label-name" htmlFor="">TRANSACTION NAME</label>
              <input className="input-name" name='name' value={transactionForm.name} onChange={changeTransactionFormInput} type="text" placeholder="Type Here"></input>

              <label className="label-name" htmlFor="">Total TRANSACTION</label>
              <input className="input-name" type="text" name='total' value={transactionForm.total} onChange={changeTransactionFormInput} placeholder="Type Here"></input>


              <label className="label-name" htmlFor="">DATE</label>
              <input className="input-name" type="date" name='date' value={transactionForm.date} onChange={changeTransactionFormInput} placeholder="Type Here"></input>

              <label className="label-name" htmlFor="">FILE</label>
              <input className="input-name" type="file" name='file' value={transactionForm.file} onChange={changeTransactionFormInput} placeholder="Type Here"></input>

              <label className="label-name" htmlFor="">ITEM</label>


              <select className="input-name" value={transactionForm.ItemId} name="ItemId" onChange={changeTransactionFormInput} placeholder="What is genre?">
                <option  >Choose your Item</option>

                {products.map((product) => (

                  <option key={product.id} value={product.id} >{product.name}</option>

                ))}

              </select>


              <label className="label-name" htmlFor="">COMPANY</label>
              <select className="input-name" value={transactionForm.CompanyId} name="CompanyId" onChange={changeTransactionFormInput} placeholder="What is genre?">
                <option  >Choose your Company</option>

                {companies.map((company) => (

                  <option key={company.id} value={company.id} >{company.name}</option>

                ))}

              </select>

            </div>
            <div className="form-button">

              <button className="table-button1" type="submit"> <p className="table-button-text">
                Save
              </p> </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )

}

export default AddItem; 