import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { addCompanies } from '../store/actionCreator'
import { useDispatch } from 'react-redux';
import errorAlert from '../hooks/errorAlert';
import successAlert from '../hooks/successAlert';


function AddCompany() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [companiesForm, setcompaniesForm] = useState({
        name: '',
        // description: '',
        // amount: '',
        // receipt:'',

  })
 let formData = new FormData
  const changeCompanyFormInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setcompaniesForm({
      ...companiesForm,
      [field]: value
    })
  }

  const addNewCompany = () => {
    dispatch(addCompanies(companiesForm))
    .then(() => {
      successAlert('Success add company');
      navigate('/company');
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
            <h2> New Company</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        addNewCompany()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">COMPANY NAME</label>
              <input className="input-name" name='name' value={companiesForm.name} onChange={changeCompanyFormInput} type="text" placeholder="Type Here"></input>

                {/* <label className="label-name" htmlFor="">Description</label>
                <input className="input-name" type="text" name='description' value={companiesForm.description} onChange={changeItemFormInput} placeholder="Type Here"></input>

              
                <label className="label-name" htmlFor="">Amount</label>
                <input className="input-name" type="text" name='amount' value={itemsForm.amount} onChange={changeItemFormInput} placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">Receipt</label>
                <input className="input-name" type="file" name='receipt' value={itemsForm.receipt} onChange={changeItemFormInput} placeholder="Type Here"></input> */}

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

export default AddCompany; 