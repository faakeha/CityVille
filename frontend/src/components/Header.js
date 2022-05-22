import React, { Component } from 'react';
import { useState } from 'react';
import { Link, useNavigate, withRouter } from "react-router-dom";
import logo from '../logo.svg';
import Register from './Register';


const token = localStorage['auth'] 
const sid = 3;
const cid = 2;

const Header = () => (
  

  <div className = "flex-container" >
    <h1 className = "header_title">CityVille</h1>
  
    <Link to = "/Homepage" className="header_home" style = {{textDecoration : 'none'}}>
    Home</Link>&nbsp;
    <Link to = "/Services" className="header_service" style = {{textDecoration : 'none'}}>
    Services</Link>&nbsp;
    <Link to = "/Login" className="header_service" style = {{textDecoration : 'none'}}>
    Login</Link>&nbsp;
   
   
    <Link to ={`/Register/${sid}`} className='btn-primary col hdbtn' >
    Signup as Seller</Link>
  
    &nbsp;&nbsp;&nbsp;
    <Link to ={`/Register/${cid}`} className='btn-primary col hdbtn'>
   Signup as Customer</Link>

   {/* <Link to ={"/Register"} state={{ userRole: 2 }}  className='btn-primary col hdbtn'>
   Signup as Customer</Link> */}
    </div>

)
export default Header;