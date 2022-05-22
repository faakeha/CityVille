import React from 'react'
import {TiTickOutline} from 'react-icons/ti'
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";


function Popup(props) {
  if(props.message === 'User Registered'){
    console.log('in if')
  return (
    <div class="popup">
        
        <div className='tick'>
            <FaCheckCircle size='lg'></FaCheckCircle>
        </div>
        <div className='box'>
            <h2 style={{color: 'gray'}}>Success</h2>
         <p style={{color: 'gray'}}> You have successfully signed up! </p>
         <br/><br/><br/> 
          <input 
            type="submit"
            className="btn btn-primary log"
            value='Login'
          />
        </div>
      </div>
  )
  }
  else{
    console.log('in else')
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
           
          />
        </div>
      </div>
  )
  }
}

export default Popup