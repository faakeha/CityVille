import React, { Component } from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, withRouter } from "react-router-dom";
import logo from '../logo.svg';
import Register from './Register';
import { GlobalState } from '../GlobalState'



function Header3() {

  const state = useContext(GlobalState)
  
  const [role, setRole] = state.role;
function logout() {
  
  //localStorage.clear()
  console.log(localStorage)
  async function check (){
  const token = localStorage['userToken'] 
		//event.preventDefault()
		const data = await fetch('http://localhost:3001/CityVille/logout', {
		  method: 'DELETE',
		  headers: {
			'Content-Type':'application/json'
		  },
      body: JSON.stringify({
        token
      })
		  })
		
     const response = await data.json();
    
     if(response == "Logged out"){
       setRole("");
       localStorage.clear();
     }
     }
     check() 

}


    const username = localStorage['username'];
  return (
    <div className="flex-container" >
        <h1 className="header_title">CityVille</h1>
        <Link to="/Homepage" className="header_home" style={{ textDecoration: 'none' }}>
          Home</Link>&nbsp;
        <Link to="/Services" className="header_service" style={{ textDecoration: 'none' }}>
          Services</Link>&nbsp;
        <Link to="/Appointments" className="header_service" style={{ textDecoration: 'none' }}>
          Appointments</Link>&nbsp;
        <Link to="/Homepage" className="header_service" onClick={logout()} style={{ textDecoration: 'none' }}>
          Logout</Link>&nbsp;
        <Link to="/Profile" className="header_user" style={{ textDecoration: 'none', fontSize: '15px', color: '#ffffff', paddingRight: '100px' }}>
          {username}</Link>&nbsp;
      </div>
  )
}

export default Header3;
