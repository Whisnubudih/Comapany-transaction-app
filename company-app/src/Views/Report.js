import React, {useEffect} from 'react'

import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { fetchReport } from '../store/actionCreator';
import TableIReport from '../Components/TableIReport';


function Home (){
  const navigate = useNavigate()
  const { reports} = useSelector((state) => state.reportReducer);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReport());
  }, []);

  
  const addItem = () =>{
    navigate(`/grafik`)
  }

  
  return (
    <section>
         <NavbarHome />
    <div className="home">
      <h2>REPORT LIST</h2>
    <button onClick={() => {
            addItem()
          }} className="nav-button" >
            <p className="table-button-text">
              GRAFIK
            </p>
          </button>
    <div className="table">
    <table>
        <thead>

        <tr className="table-row-1" >
          <th className="table-th">NAMA REPORT</th>
          <th className="table-th">NAMA BARANG</th>
          <th className="table-th">NAMA PERUSAHAAN</th>
          <th className="table-th">NAMA TRANSAKSI</th>
          <th className="table-th">FILE TRANSAKSI</th>
         
        </tr>
        </thead>

    
        
   

      {reports.map((report) =>(
                      <TableIReport key={report.id} report={report} />

                    ))}
       
       
     
    </table>
  </div>
  </div>
    </section>
  )
}

export default Home;
