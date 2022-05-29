import React from 'react'

function CustomerProfile() {
  return (
    <div>
        <div className="float-child1">
                
               <img style = {{paddingTop:'50px', width: 300, 
        height: 300}} src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/Image_t0wi4m.png" alt="Tesla" /> 
                
               
        </div>
        <div>
                <h2 style = {{paddingTop:'50px', textAlign:"left"}}>Customer Name</h2>
             <div className='same_line'>
                <p style ={{fontSize : '16px', fontWeight : '5px',paddingTop:"20px"}}>Lilly Sharp</p> 
                &nbsp;&nbsp;&nbsp;
                <p style = {{paddingTop : '20px',fontSize:'16px'}}> 3.5</p>
               <img style = {{paddingLeft : '5px', paddingTop : '20px', maxHeight : '45px', maxWidth : '45px'}} src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/rating_star_d7webp.png" alt="Tesla" /> 
               
            </div>
           
        </div>
        {/* <div>
          <h3>Reviews</h3>
        </div> */}

    </div>
  )
}

export default CustomerProfile