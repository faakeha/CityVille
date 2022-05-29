import React from 'react'

function CustomerProfile() {
  return (
    <div>
        <div className="float-child1">
                
               <img style = {{paddingLeft : '100px',paddingTop:'50px', width: 200,
        height: 200,}} src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/Image_t0wi4m.png" alt="Tesla" /> 
                <div className='same_line'>
                <p style ={{fontSize : '16px', fontWeight : '5px', paddingLeft : '215px',paddingTop:"20px"}}>Lilly Sharp</p> 
                &nbsp;&nbsp;&nbsp;
                <p style = {{paddingTop : '20px',fontSize:'16px'}}> 3.5</p>
               <img style = {{paddingLeft : '5px', paddingTop : '27px', maxHeight : '17px', maxWidth : '17px'}} src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/rating_star_d7webp.png" alt="Tesla" /> 
                </div>
                <p style = {{paddingLeft : '0px', paddingTop : '0px'}}> Total Services: 5</p>
        </div>
        <div>
                <h2 style = {{paddingLeft : '0px',paddingTop:'35px'}}>House Cleaning</h2>
        </div>
    </div>
  )
}

export default CustomerProfile