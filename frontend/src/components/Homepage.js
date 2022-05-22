import React, {useState, useEffect, useContext} from 'react'
import {ScrollMenu} from 'react-horizontal-scrolling-menu'
import Searchbox from './Searchbox'
import {GlobalState} from '../GlobalState'


function Homepage() {
  const state = useContext(GlobalState)
  console.log('abc', state)
  const [categoriesG] = state.categories
  //const [sp, setSp] = useState([''])
const [sp] = state.users
   
    //const userToken = localStorage.getItem('userToken')
      
       /* Promise.all([
          fetch('http://localhost:3001/CityVille/Categories'),
          fetch('http://localhost:3001/CityVille/getAllUsers')
        ]).then(function (responses) {
          // Get      a JSON object from each of the responses
          return Promise.all(responses.map(
            function (response) {
            return response.json();
          }));
        }).then(function (data) {
          // Log the data to the console
          // You would do something with both sets of data here
          console.log(data);
         // setCategories(data[0]);
          setSp(data[1])
        }).catch(function (error) {
          // if there's an error, log it
          console.log(error);
        });*/
      
      
    
      useEffect((e) => {
        //allServices(e)
       }, []); 

       const getsp = sp.map( item => (
          <div className='form-group l'>
          <img src={item.image} style={{
        width: 100,
        height: 100,
        }} alt='user' className='roundimg'></img>
        <div>
        <p>{item.first_name} {item.last_name}</p>
        
        <br></br>
        </div>
        </div>
      ));

      const getcategories = categoriesG.map( item => (
        <div className="form-group l" >
          <img src="https://res.cloudinary.com/dbmknff2i/image/upload/v1650369466/users/x_pbf8xz.png" style={{
        width: 100,
        height: 100,
        }} alt='category' ></img>
        <div>
        <p>{item}</p>
        <br></br>
        </div>
        </div>
      ));

      //const SearchComp = Searchbox();
      
  
       
  return (
      <div>
    <div>images</div>
    <Searchbox/>
    <div className='scroll'>
      <h4 className='cont pm'>Top service providers</h4>
        <ScrollMenu >
        {getsp}   
        </ScrollMenu>
        
    </div>
    <div className='scroll'>
    <h4 className='cont pm'>Categories</h4>
      <ScrollMenu className='space'>
    {getcategories}
      </ScrollMenu>
      </div>
    
    
    </div>
    
  )
}

export default Homepage