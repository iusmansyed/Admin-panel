import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Bookings from "../Pages/Booking";
import SellCar from "../Pages/SellCar";
import Setting from "../Pages/Setting";
import Login from "../Component/Form/Login.jsx";


const Router = () => {
  return (

    <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/bookings' element={<Bookings/>}/>
        <Route path='/sell-Car' element={<SellCar/>}/>
        <Route path='/settings' element={<Setting/>}/>
        
      </Routes>
   
  );
};

export default Router;
