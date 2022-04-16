import './App.css'
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './routes/ProtectRoute';

import Login from './Views/Login.js'
import Register from './Views/Register';
import Home from './Views/Home'
import Company from './Views/Company'
import AddItem from './Views/AddItem';
import EditItem from './Views/EditItem';

import AddCompany from './Views/AddCompany';
import EditCompany from './Views/EditCompany';
import Chart from './Components/Charts';
import Transaction from './Views/Transaction';
import EditTransaction from './Views/EditTransaction';
import AddTransaction from './Views/AddTransaction'
import Report from './Views/Report';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
        <Route path="/additem" element={
          <ProtectedRoute>
            <AddItem />
          </ProtectedRoute>
        } />
         <Route path="/edititem/:id" element={
          <ProtectedRoute>
            <EditItem />
          </ProtectedRoute>
        } />
        <Route path="/company" element={
          <ProtectedRoute>
            <Company />
          </ProtectedRoute>
        } />
                <Route path="/addcompany" element={
          <ProtectedRoute>
            <AddCompany />
          </ProtectedRoute>
        } />
         <Route path="/editcompany/:id" element={
          <ProtectedRoute>
            <EditCompany />
          </ProtectedRoute>
        } />
         <Route path="/transaction" element={
          <ProtectedRoute>
            <Transaction />
          </ProtectedRoute>
        } />
                <Route path="/addtransaction" element={
          <ProtectedRoute>
            <AddTransaction />
          </ProtectedRoute>
        } />
         <Route path="/edittransaction/:id" element={
          <ProtectedRoute>
            <EditTransaction />
          </ProtectedRoute>
        } />
         <Route path="/report" element={
          <ProtectedRoute>
            <Report />
          </ProtectedRoute>
        } />
         <Route path="/grafik" element={
          <ProtectedRoute>
            <Chart />
          </ProtectedRoute>
        } />
      </Routes>

    </div>
  )
}

export default App;
