import React, {useEffect} from 'react'

import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { fetchCompanies } from '../store/actionCreator';
import TableCompany from '../Components/TableCompany';


function Company (){
  const navigate = useNavigate()
  const { companies} = useSelector((state) => state.companyReducer);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  
  const addCompany = () =>{
    navigate(`/addcompany`)
  }

  
  return (
    <section>
         <NavbarHome />
    <div className="home">
      <h2>COMPANY LIST</h2>
    <button onClick={() => {
            addCompany()
          }} className="nav-button" >
            <p className="table-button-text">
              Add New Company
            </p>
          </button>
    <div className="table">
    <table>
        <thead>

        <tr className="table-row-1" >
          <th className="table-th">Nama</th>
          <th className="table-th">ACTION</th>
          {/* <th className="table-th">AMOUNT</th>
          <th className="table-th">STATUS</th>
          <th className="table-th">RECEIPT</th>
          <th className="table-th">ACTION</th> */}
        </tr>
        </thead>

    
        
   

      {companies.map((company) =>(
                      <TableCompany  key={company.id} company={company} />

                    ))}
       
       
     
    </table>
  </div>
  </div>
    </section>
  )
}

export default Company;
