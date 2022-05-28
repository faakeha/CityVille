import React, { Component } from 'react';
// import Image from '.../Image.PNG';
// import star from '.../rating_star.png';

    function Individual_listing()  {
        return (
            <div >
                <div className="float-child1">
                <h2 style = {{paddingLeft : '0px',paddingTop:'35px'}}>House Cleaning</h2>
               <img style = {{paddingLeft : '100px',paddingTop:'20px'}} src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/Image_t0wi4m.png" alt="Tesla" /> 
                <div className='same_line'>
                <p style ={{fontSize : '16px', fontWeight : '5px', paddingLeft : '215px',paddingTop:"20px"}}>Lilly Sharp</p> 
                &nbsp;&nbsp;&nbsp;
                <p style = {{paddingTop : '20px',fontSize:'16px'}}> 3.5</p>
               <img style = {{paddingLeft : '5px', paddingTop : '27px', maxHeight : '17px', maxWidth : '17px'}} src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/rating_star_d7webp.png" alt="Tesla" /> 
                </div>
                <p style = {{paddingLeft : '0px', paddingTop : '0px'}}> Total Services: 5</p>
                </div>
                <div  className="float-child2">
                    <p style = {{paddingTop : '100px', fontSize : '20px'}}>Description</p>
                    <p style = {{paddingTop : '20px', fontSize : '20px'}}>Category</p>
                    <p style = {{paddingTop : '20px', fontSize : '20px'}}>Price</p>
                    <p style = {{paddingTop : '20px', fontSize : '20px'}}>Business Address</p>
                </div>
            </div>
            
        );
    }


export default Individual_listing;