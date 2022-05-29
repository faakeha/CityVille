import React, { Component } from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, withRouter } from "react-router-dom";
import logo from '../logo.svg';
import Register from './Register';
import { GlobalState } from '../GlobalState'


const token = localStorage['auth'] 
console.log(token);
const sid = 3;
const cid = 2;
// function UseForceUpdate(){
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue(value => value + 1); // update the state to force render
// }


// function logout() {
//   //localStorage.clear()
//   console.log(localStorage)


// }


function Header(event, props) {
  

  // const state = useContext(GlobalState)
  //const [sp] = state.users;
  //const [role, setRole] = state.role;
  //const [role, setRole] = useState('')
   const role1 =  props.role;
  console.log("printing role")
  console.log(role1)
  const username = localStorage['username'];
  //const forceUpdate = UseForceUpdate()
  
  // if (role1 == '1') {

  //   return (

  //     <div className="flex-container" >
  //       <h1 className="header_title">CityVille</h1>
  //       <Link to="/Homepage" className="header_home1" style={{ textDecoration: 'none' }}>
  //         Home</Link>&nbsp;
  //       <Link to="/Reports" className="header_service" style={{ textDecoration: 'none' }}>
  //         Reports</Link>&nbsp;
  //       <Link to="/Listings" className="header_service" style={{ textDecoration: 'none' }}>
  //         Listings</Link>&nbsp;
  //       <Link to="/Sellers" className="header_service" style={{ textDecoration: 'none' }}>
  //         Sellers</Link>&nbsp;
  //       <Link to="/Homepage" className="header_service" onClick={logout()} style={{ textDecoration: 'none' }}>
  //         Logout</Link>&nbsp;
  //       <Link to="/Profile" className="header_user" style={{ textDecoration: 'none', fontSize: '15px', color: '#ffffff' }}>
  //         {username}</Link>&nbsp;
  //     </div>
  //   )
  // }
  // else if (role1 == '2') {

  //   return (

  //     <div className="flex-container" >
  //       <h1 className="header_title">CityVille</h1>
  //       <Link to="/Homepage" className="header_home" style={{ textDecoration: 'none', paddingRight: '10px' }}>
  //         Home</Link>&nbsp;
  //       <Link to="/Services" className="header_service" style={{ textDecoration: 'none', paddingRight: '10px' }}>
  //         Services</Link>&nbsp;
  //       <Link to="/Appointments" className="header_service" style={{ textDecoration: 'none', paddingRight: '10px' }}>
  //         Appointments</Link>&nbsp;
  //       <Link to="/Homepage" className="header_service" onClick={logout()} style={{ textDecoration: 'none', paddingRight: '10px' }}>
  //         Logout</Link>&nbsp;
  //       <Link to='/Services' className='btn-primary col hdbtn' style={{ textDecoration: 'none', maxWidth: '150px', marginRight: '30px', marginLeft: '25px' }}>
  //         Add Service</Link>
  //       <Link to="/Profile" className="header_user" style={{ textDecoration: 'none', fontSize: '15px', color: '#ffffff', paddingRight: '1px' }}>
  //         {username}</Link>&nbsp;
  //     </div>
  //   )
  // }
  // else if (role1 == '3') {
  //   return (
  //     <div className="flex-container" >
  //       <h1 className="header_title">CityVille</h1>
  //       <Link to="/Homepage" className="header_home" style={{ textDecoration: 'none' }}>
  //         Home</Link>&nbsp;
  //       <Link to="/Services" className="header_service" style={{ textDecoration: 'none' }}>
  //         Services</Link>&nbsp;
  //       <Link to="/Appointments" className="header_service" style={{ textDecoration: 'none' }}>
  //         Appointments</Link>&nbsp;
  //       <Link to="/Homepage" className="header_service" onClick={logout()} style={{ textDecoration: 'none' }}>
  //         Logout</Link>&nbsp;
  //       <Link to="/Profile" className="header_user" style={{ textDecoration: 'none', fontSize: '15px', color: '#ffffff', paddingRight: '100px' }}>
  //         {username}</Link>&nbsp;
  //     </div>
  //   )
  // }

  // else {
    return (
      <div className="flex-container" >
        <h1 className="header_title">CityVille</h1>
        <Link to="/Homepage" className="header_home" style={{ textDecoration: 'none' }}>
          Home</Link>&nbsp;
        <Link to="/Services" className="header_service" style={{ textDecoration: 'none' }}>
          Services</Link>&nbsp;
        <Link to="/Login" className="header_service" style={{ textDecoration: 'none' }}>
          Login</Link>&nbsp;


        <Link to={`/Register/${sid}`} className='btn-primary col hdbtn' >
          Signup as Seller</Link>

        &nbsp;&nbsp;&nbsp;
        <Link to={`/Register/${cid}`} className='btn-primary col hdbtn'>
          Signup as Customer</Link>

      </div>
    )
  }

//}

export default Header;