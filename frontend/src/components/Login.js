import React, { Component } from 'react';
import {useState, useEffect, createContext, useContext} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Profile from './Profile';
import {FaExclamationCircle } from "react-icons/fa";
import { GlobalState } from '../GlobalState'



function Login() {

  const state = useContext(GlobalState)
    //const [sp] = state.users;
    const [role, setRole] = state.role;
    const [user, setUser] = useState(['']);
    

   let navigate = useNavigate(); 
  function routeChange(){ 
    
    //if(form === true){
      let path = `/Homepage`; 
      navigate(path);
    //}
    
  } 
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
    const [msg, setMsg] = useState('')
  //const [data, setData] = useState('');
  const [login_resp, setLogin] = useState('')
  //const [role, setRole] = useState('')


  async function loginUser(event){

  //   Promise.all([
  //   fetch('http://localhost:3001/CityVille/Login'),
  //   fetch('http://localhost:3001/CityVille/getRole')
  // ]).then(function (responses) {
  //   // Get a JSON object from each of the responses
  //   return Promise.all(responses.map(function (response) {
  //     return response.json();
  //   }));
  // }).then(function (data) {
  //   // Log the data to the console
  //   // You would do something with both sets of data here
  //   console.log('login response', data[0]);
  //   console.log('get role response', data[1]);
    
  // }).catch(function (error) {
  //   // if there's an error, log it
  //   console.log(error);
  // });





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
    //localStorage.setItem('firstLogin', true)
     localStorage.setItem('userToken', JSON.stringify(data.accessToken))
    // localStorage.setItem('username', JSON.stringify(data.first_name + " " + data.last_name))
    // setRole(data.user_role);
    // localStorage.setItem('user_role', JSON.stringify(data.user_role))
    // localStorage.setItem('user_id', JSON.stringify(data._id))
    setRole(JSON.stringify(data.user_role));
    setUser({
      id: data._id,
      first_name: data.first_name,
      last_name:data.last_name,
      token :data.accessToken
    })
    routeChange()
    
    }
    else{
      setMsg(data)
      setIsOpen(true)
    }


    
   
  }

  function FPopup(){
    if(isOpen && msg === 'Wrong Credentials'){
      return(
        <div class="popup">
        <div className='tick'>
              <FaExclamationCircle size='lg'/>
          </div>
          <div className='box'>
            <h2 style={{color: '#c91414'}}>Error</h2>
            <p style={{color: '#555'}}>
              The username or password you entered is incorrect.<br/><br/>
              Please try again.
            </p>
            <br/> 
            <input 
              type="submit"
              className="btn btn-primary log"
              value='Ok'
             onClick={() => {setIsOpen(false)}}
            />
          </div>
        </div>
  
       )} 
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
        {isOpen && msg === 'Wrong Credentials' && <FPopup/>}
      </div>
    </div>
    
    )
  }

export default Login