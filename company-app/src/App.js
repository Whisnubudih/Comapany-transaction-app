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
      
        <Route path="/piechart" element={
         <ProtectedRoute>
           <Chart />
         </ProtectedRoute>
       } />
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
      </Routes>

    </div>
  )
}

export default App;
