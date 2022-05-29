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

function Header1() {
  const username = localStorage['username'];
  return (
    <div className="flex-container" >
        <h1 className="header_title">CityVille</h1>
        <Link to="/Homepage" className="header_home1" style={{ textDecoration: 'none' }}>
          Home</Link>&nbsp;
        <Link to="/Reports" className="header_service" style={{ textDecoration: 'none' }}>
          Reports</Link>&nbsp;
        <Link to="/Listings" className="header_service" style={{ textDecoration: 'none' }}>
          Listings</Link>&nbsp;
        <Link to="/Sellers" className="header_service" style={{ textDecoration: 'none' }}>
          Sellers</Link>&nbsp;
        <Link to="/Homepage" className="header_service" onClick={logout()} style={{ textDecoration: 'none' }}>
          Logout</Link>&nbsp;
        <Link to="/Profile" className="header_user" style={{ textDecoration: 'none', fontSize: '15px', color: '#ffffff' }}>
          {username}</Link>&nbsp;
      </div>
  )
}

export default Header1
