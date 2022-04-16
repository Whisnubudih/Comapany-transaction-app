import  { useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import {fetchTransactionId} from '../store/actionCreator'
import { fetchProducts } from '../store/actionCreator';
import { fetchCompanies } from '../store/actionCreator';


function EditTransaction() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { products} = useSelector((state) => state.itemReducer);
    useEffect(() => {
      dispatch(fetchProducts());
    }, []);

    const { companies} = useSelector((state) => state.companyReducer);
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

    const [editTransactionForm, setEditTransactionForm] = useState({
      name: '',
      total: '',
      date: '',
      file:'',
      ItemId:'',
      CompanyId:'',
      

  })

  const changeEditTransactionInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setEditTransactionForm({
      ...editTransactionForm,
      [field]: value
    })
  }
  const {id} = useParams()
  const { transactionId, productsLoading, productsError } = useSelector((state) => state.transactionReducer);
  
     useEffect(() =>{
    dispatch(fetchTransactionId(id))
    },[])

    const EditNewTransaction = () =>{
        fetch(`https://company-transaction-server.herokuapp.com/transaction/${id}`, {
            method: 'PUT', // or 'PUT'
         headers: {
           'Content-Type': 'application/json',
           access_token: localStorage.getItem('access_token')
         },
         body: JSON.stringify(editTransactionForm),
       })
       .then(response => response.json())
       .then(data => {
         console.log('Success:', data);
         setEditTransactionForm(transactionId)
 
         navigate('/transaction')
       })
       .catch((error) => {
           console.error('Error:', error);
         });
     }
     
     useEffect(() => {
      setEditTransactionForm(transactionId)
     },[transactionId])
  return (
    <section>
      
        <NavbarHome />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> EDIT TRANSACTION</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        EditNewTransaction()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">TRANSACTION NAME</label>
              <input className="input-name"  name='name' value={editTransactionForm.name} onChange={changeEditTransactionInput} type="text"/>

              <label className="label-name" htmlFor="">Total TRANSACTION</label>
                <input className="input-name" type="text" name='total' value={editTransactionForm.total} onChange={changeEditTransactionInput} placeholder="Type Here"></input>

              
                <label className="label-name" htmlFor="">DATE</label>
                <input className="input-name" type="date" name='date' value={editTransactionForm.date} onChange={changeEditTransactionInput} placeholder="Type Here"></input>
{/* 
                <label className="label-name" htmlFor="">Receipt</label>
                <input className="input-name" type="file" name='file' value={editTransactionForm.file} onChange={changeEditTransactionInput} placeholder="Type Here"></input> */}

<label className="label-name" htmlFor="">ITEM</label>
               

               <select className="input-name"  name='ItemId' value={editTransactionForm.ItemId} onChange={changeEditTransactionInput} placeholder="What is genre?">
             <option  >Choose your Item</option>
             
             {products.map((product) =>(
                    
                    <option key={product.id} value={product.id} >{product.name}</option>

                  ))}
             
              </select>


               <label className="label-name" htmlFor="">COMPANY</label>
                 <select className="input-name"  name='CompanyId' value={editTransactionForm.CompanyId} onChange={changeEditTransactionInput} placeholder="What is genre?">
             <option  >Choose your Company</option>
             
             {companies.map((company) =>(
                    
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

export default EditTransaction; 