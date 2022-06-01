
import React, {useContext, useState, useEffect} from 'react'
import { GlobalState } from '../GlobalState'
import {getItemsPos, ScrollMenu} from 'react-horizontal-scrolling-menu'
import {Link} from 'react-router-dom'


function Services() {
  
  const state = useContext(GlobalState)
  const [cs, setcs] = state.servcat
  const [checkedState, setCheckedState] = useState( { serv:[], istrue:[] } )
  

  const handleOnChange = (e) => {

    const index = e.target.value;
    const checked = e.target.checked;
    const {serv} = checkedState;
   

    console.log(index)
    const value = cs[index]
    console.log("first", value)


   if(checked){
     setCheckedState({
      serv : [...serv, value],
      istrue : [...serv, checked]
   })
   }
   else{
      setCheckedState({
        serv: serv.filter((e) => e !== value),
        istrue: serv.filter((e) => e !== value)
      })
   }

  }
  
    function getcs(catg){
      console.log('hello2', catg)
     
      return(
        catg.services.map(obj => (
          
          <div className='align'>
            <div className='form-group l'>
              <Link to={`/Individual_Listing/${obj._id}/${obj.user_id}`}>
              <img src="https://res.cloudinary.com/dbmknff2i/image/upload/v1650369466/users/x_pbf8xz.png" style={{
              width: 100,
              height: 100,
              }} alt='user' className='roundimg'></img>
              </Link>
              
              <p style={{textAlign: "center", fontWeight:"500", fontSize:"19px"}}>{obj.service_name}</p>
              <br></br>
              
            </div>
          </div>
        ))
      )
    }


  return (
  
    <div className='services'> 

      {/* LEFT */}

      <div className='serviceleft'>
         <h4>Categories</h4>
         <div className='leftcat'>
          {cs.map((cat, index) => (
            <label>
              <input 
              type='checkbox'
              value= {index}
              onChange={handleOnChange}
              
              
               />
              <span className='checkName'>{cat._id}</span>
            </label>
          ))}
        </div>
      </div>

            {/* RIGHT */}

      <div className='serviceright'>
        <p className='serviceTitle'>Services</p>
        
        <div className='ser'>{checkedState.serv.map((catg) => (
          <div className='ser2'>
            <p style={{fontWeight:"600", textAlign:"left", paddingLeft:"28px", fontSize:"30px", color: "#C5801A", marginBottom:"0px"}}>{catg._id} Services</p> 
            <ScrollMenu>
              {getcs(catg)}
            </ScrollMenu>
          </div>
        
        ))
        }
        </div>
      </div>

    </div>
    
  )
}

export default Services
