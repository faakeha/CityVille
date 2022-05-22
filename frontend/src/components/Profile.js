import React from 'react'
import {useState, useEffect, useContext} from 'react';
import {UserContext} from '../UserContext';


const Profile =()=> {
  //const {value, value2} = useContext(UserContext)
    //const [token] = value
    const [data, setData] = useState({
      first_name:'',
      last_name:'',
      phone_number:'',
      image:''

    })
    //const [token] = state.token
    console.log('in profile')
    const userToken = localStorage.getItem('userToken')
    console.log(userToken)

    async function User(event){
        console.log('in user method')
       // console.log(token)
       // event.preventDefault()
        const response = await fetch('http://localhost:3001/CityVille/profile', {
          method: 'GET',
          headers: {
            "token":`Bearer ${userToken}`
          }
        })
    
        const data1 = await response.json()
        console.log(data1)

        setData({
          first_name: data1.first_name,
          last_name: data1.last_name,
          phone_number: data1.phone_number,
          image: data1.image
        })
        //console.log(data)
        
      }

      useEffect((e) => {
       User(e)
      }, []);
      
  return (
    <div className="container" >
      <div className='floatcontainer'>
      <img src={data.image} style={{
          width: 200,
          height: 200,
          }}></img>
          <div>
       <p>{data.first_name} {data.last_name}</p>
        <p>Contact no. {data.phone_number}</p>
        </div>
      </div>
      
        
      </div>
   
  )
}

export default Profile;