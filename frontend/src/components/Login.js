import React, { Component } from 'react';
import {useState, useEffect, createContext} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Profile from './Profile';


function Login() {
   let navigate = useNavigate(); 
  function routeChange(){ 
    
    //if(form === true){
      let path = `/Homepage`; 
      navigate(path);
    //}
    
  } 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [data, setData] = useState('');


  async function loginUser(event){
    console.log('in login method')
    event.preventDefault()
    const response = await fetch('http://localhost:3001/CityVille/login', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    })

    const data = await response.json()

    if(data !== 'Wrong Credentials'){
      console.log('before route change')
    localStorage.setItem('firstLogin', true)
    localStorage.setItem('userToken', data.refreshToken)
    routeChange()
    }
    else{
      prompt(data)
    }
   
  }

  
   

 console.log('in login')
    return (
      
      <div className="card">
        
      <div className="card-body log">
      <div className='floatcontainer'>
      <h1 className='cont pm hc'>CityVille</h1>
      <p>Don't have an account? </p>
      <Link to="/Register" style={{ textDecoration: 'none' }}><p className='pm'>Sign Up</p></Link>
      </div>
      
        <form onSubmit={loginUser}>
          <div className="row">
            <div className="form-group l">
             
              <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                type="text"
                size="10"
                className="form-control"
                placeholder="Enter your email here"
                autoFocus
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group l">
              
              <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                placeholder="Enter your password here"
                autoFocus
              />
            </div>
          </div>
         <div className='floatcontainer b'>

         
              <input
                type="submit"
                className="btn btn-primary log"
                disabled={
                  email === "" || password === "" ? true : false
                }
                value="Login"
                
                
                //onClick={routeChange}
              />
                
              </div>
        </form>
      </div>
    </div>
    
    )
  }

export default Login