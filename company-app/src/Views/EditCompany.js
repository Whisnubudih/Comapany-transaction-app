import  { useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import {fetchCompaniesId} from '../store/actionCreator';


function EditCompany() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    const [editCompanyForm, setEditCompanyForm] = useState({
       name:"",
      

  })

  const changeEditCompanyInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setEditCompanyForm({
      ...editCompanyForm,
      [field]: value
    })
  }
  const {id} = useParams()
  const { companyId, productsLoading, productsError } = useSelector((state) => state.companyReducer);
  
     useEffect(() =>{
    dispatch(fetchCompaniesId(id))
    },[])

    const EditNewCompany = () =>{
        fetch(`http://localhost:10000/company/${id}`, {
            method: 'PUT', // or 'PUT'
         headers: {
           'Content-Type': 'application/json',
           access_token: localStorage.getItem('access_token')
         },
         body: JSON.stringify(editCompanyForm),
       })
       .then(response => response.json())
       .then(data => {
         console.log('Success:', data);
         setEditCompanyForm(companyId)
 
         navigate('/company')
       })
       .catch((error) => {
           console.error('Error:', error);
         });
     }
     
     useEffect(() => {
      setEditCompanyForm(companyId)
     },[companyId])
  return (
    <section>
      
        <NavbarHome />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> EDIT ITEM</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        EditNewCompany()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">ITEM NAME</label>
              <input className="input-name"  name='name' value={editCompanyForm.name} onChange={changeEditCompanyInput} type="text"/>
{/* 
                <label className="label-name" htmlFor="">Bank Account</label>
                <input className="input-name" name='bankAccount' value={profileForm.bankAccount} onChange={changeProfileInput} type="text"/> */}

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

export default EditCompany; 