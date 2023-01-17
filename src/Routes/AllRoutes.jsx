import React from 'react'
import {Routes, Route} from "react-router-dom";
import RequireAuth from '../context/RequiredAuth';
import Details from './Details/Details';
import Homepage from './Home/Homepage';
import Login from './Login/Login';
import Register from './Register/Register';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <RequireAuth><Homepage/></RequireAuth> }></Route>
        <Route path="/detail" element={<Details/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
