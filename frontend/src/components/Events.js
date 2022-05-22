import React from 'react'
import {useState, useEffect} from 'react';
import {StyleSheet} from 'react'

function Events() {
    const [data, setData] = useState([''])
    const [featured, setFeatured] = useState([''])
  //let featured = []
    async function getEvents(event){
        console.log('in event method')
        const response = await fetch('http://localhost:3001/CityVille/getAllEvents', {
          method: 'GET',
        })
    
        const data1 = await response.json()
        console.log(data1)
       setData(data1)
       setFeatured(data1)
       feature()
       
      }
     
      console.log('clg data', data)
     console.log('ft', featured)
        
       
    
      function feature(){
        console.log('in featured')
        
        setFeatured(featured => featured.filter(item  => item.event_isFeatured === 1))
        
        setData(data => data.filter(item => item.event_isFeatured === 0))
  
      }

     useEffect((e) => {
      getEvents(e)
     }, []); 



  return (
    <div >
        <h2>Events</h2>
        <div>{featured.map( item => (
          <div key={item._id} className="container" >
            <img src={item.event_image_banner} style={{
          width: 1000,
          height: 400,
          }} alt='Ballet for youth Level 1'></img>
          <div class="bottom-left">
          <h3>{item.event_title}</h3>
          <div >{item.event_subtext}</div>
          <div >On: {item.event_date}</div>
          <div >{item.event_category}</div>
          <div >{item.event_detail_text}</div>
          <div >Fee: {item.event_fee}</div>
          <div>ApplyNow : 
          <a href={item.event_apply_now_url}>Click here to apply</a>
          </div>
          <br></br>
          </div>
          </div>
        ))}</div>
        <div>{data.map( item => (
          <div key={item._id} class="column">
          <img src={item.event_image_thumb} style={{
          width: 350,
          height: 200,
          }} ></img>
          <h4>{item.event_title}</h4>
          <div>{item.event_subtext}</div>
          <div>On: {item.event_date}</div>
          <div>{item.event_category}</div>
          <div>{item.event_detail_text}</div>
          <div>Fee: {item.event_fee}</div>
          <div>ApplyNow : 
          <a href={item.event_apply_now_url}>Click here to apply</a>
          </div>
          <br></br>
          </div>
        ))}</div>
      </div>
  )
}

export default Events