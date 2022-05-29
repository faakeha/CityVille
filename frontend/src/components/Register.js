import React, { Component } from 'react'
import { Button } from 'bootstrap';
import { Link, useParams } from 'react-router-dom';
import '../App.css';
import {useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";




function Register() {
  const params = useParams();
  const ur = params.role;
  console.log(params.role)

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Login`; 
    navigate(path);
  }
  
    const [first_name, setName] = useState('');
    const [last_name, setName2] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnic_number, setcnic] = useState('');
    const [phone_number, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [user_role, setrole] = useState(ur);
    const [isOpen, setIsOpen] = useState(false);
    const [msg, setMsg] = useState('')

    //let msg =''

  async function registerUser(event){
    console.log('in method')
    event.preventDefault()

    
    const response = await fetch('http://localhost:3001/CityVille/register', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        first_name, last_name, email, password, cnic_number, phone_number, address, user_role
      })
    })

    const data = await response.json()
    console.log('hi', data.message)
    setMsg(data.message)
    //if(data.message ===  'User Registered'){
      setIsOpen(true)


   // }
    
    
    

    // setName("")
    // setName2("")
    // setEmail("")
    // setPassword("")
    // setcnic("")
    // setphone("")
    // setaddress("")
    // setrole("")

  }

  function SPopup(){
    console.log('msg', msg.message)
    if(isOpen && msg === 'User Registered' ){
      return(
    <div class="popup">
    <div className='tick'>
        <FaCheckCircle size='lg'></FaCheckCircle>
    </div>
    <div className='box'>
        <h2 style={{color: '#555'}}>Success</h2>
     <p style={{color: '#555'}}> You have successfully signed up! </p>
     <br/><br/><br/> 
      <input 
        type="submit"
        className="btn btn-primary log"
        value='Login'
        onClick={routeChange}
      />
    </div>
  </div> 
      )}
   
  }

  function FPopup(){
    if(isOpen && msg === 'Error'){
      return(
        <div class="popup">
        <div className='tick'>
              <FaExclamationCircle size='lg'/>
          </div>
          <div className='box'>
            <h2 style={{color: '#c91414'}}>Error</h2>
            <p style={{color: '#c91414'}}> Please check all fields before signing up!</p>
            <br/><br/><br/> 
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
  
  return(
  <div className="card">
    
  <div className="card-body">
    <div className='floatcontainer'>
  <h1 className='cont pm hc'>CityVille</h1>
  <p>Already have an account? </p>
  <Link to="/Login" style={{ textDecoration: 'none' }}><p className='pm'>Login</p></Link>
  
  </div>
    <form onSubmit={registerUser}>
      <div className='floatcontainer'>

      <div className="row space">
        <div className="form-group ">
          <input
          value={first_name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control cl"
            placeholder="Enter your username here"
            autoFocus
          />
        </div>
      </div>
      
      <div className="row">
        <div className="form-group ">
          <input
          value={last_name}
            onChange={(e) => setName2(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter your username here"
            autoFocus
          />
        </div>
      </div>

      </div>

      <div className='floatcontainer'>
      <div className="row space">
        <div className="form-group ">
          <input
          value={cnic_number}
            onChange={(e) => setcnic(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter your CNIC here"
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group ">
          <input
          value={phone_number}
            onChange={(e) => setphone(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter your Phone number here"
            autoFocus
          />
        </div>
      </div>
      </div>
      <div className='floatcontainer'> 
      <div className="row space">
        <div className="form-group ">
          <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter your email here"
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group ">
          <input
          value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter your password here"
            autoFocus
          />
        </div>
      </div>
      </div>
      <div className='floatcontainer'>
      <div className="row">
        <div className="form-group ">
          <input
          value={address}
            onChange={(e) => setaddress(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter your Address here"
            autoFocus
          />
        </div>
      </div>
      </div>
      <div className='floatcontainer b'>
      
          <input
            type="submit"
            className="btn btn-primary log"
            disabled={
              first_name === "" || last_name === "" || password === "" || email === "" || cnic_number === ""  ? true : false
            }
            //onClick={Prompt}
            value="Sign Up"
          />
       
      </div>
      
    </form>
    {isOpen && msg === 'User Registered' && <SPopup/> }
    {isOpen && msg === 'Error' && <FPopup/>}
  </div>
</div>
);
}




export default Register;