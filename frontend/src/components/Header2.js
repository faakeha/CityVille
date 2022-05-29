import React, { Component } from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, withRouter } from "react-router-dom";
import logo from '../logo.svg';
import Register from './Register';
import { GlobalState } from '../GlobalState'

function logout() {
  //localStorage.clear()
  console.log(localStorage)
}

function Header2() {
  const username = localStorage['username'];
  return (
    <div className="flex-container" >
        <h1 className="header_title">CityVille</h1>
        <Link to="/Homepage" className="header_home" style={{ textDecoration: 'none', paddingRight: '10px' }}>
          Home</Link>&nbsp;
        <Link to="/Services" className="header_service" style={{ textDecoration: 'none', paddingRight: '10px' }}>
          Services</Link>&nbsp;
        <Link to="/Appointments" className="header_service" style={{ textDecoration: 'none', paddingRight: '10px' }}>
          Appointments</Link>&nbsp;
        <Link to="/Homepage" className="header_service" onClick={logout()} style={{ textDecoration: 'none', paddingRight: '10px' }}>
          Logout</Link>&nbsp;
        <Link to='/Services' className='btn-primary col hdbtn' style={{ textDecoration: 'none', maxWidth: '150px', marginRight: '30px', marginLeft: '25px' }}>
          Add Service</Link>
        <Link to="/Profile" className="header_user" style={{ textDecoration: 'none', fontSize: '15px', color: '#ffffff', paddingRight: '1px' }}>
          {username}</Link>&nbsp;
      </div>
  )
}

export default Header2
