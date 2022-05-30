import React, { useContext, useState, useEffect } from 'react';
import { GlobalState } from '../GlobalState'
// import Image from '.../Image.PNG';
// import star from '.../rating_star.png';
import { Link, useParams } from 'react-router-dom';

    function Individual_listing()  {
        const params = useParams();
        const listingid = params.id;
        console.log(listingid)

        const state = useContext(GlobalState)
        const [services] = state.services
        const [users] = state.users

        const [listing, setListing] = useState([{}])

    //     services.map(service => {
    //         if(service._id === listingid){
    //             setListing(service)
    //         }
    // })
    

    // function list(){
    //     setListing(services.filter(element => element._id === listingid))
    //     console.log(listing.service_name)
        
        //const index = services.findIndex(element => element._id === listingid)
    //     services.map(service => {
    //         if(service._id === listingid){
    //             console.log('in listing')
    //         setListing((ser) => {
    //             service_name= service.service_name,
    //             description= service.description,
    //             category= service.category,
    //             price=service.price,
    //             add= service.business_address
    //         })
    //     }
    // })
            
   //}
   
   console.log(listing)
   

    useEffect(() => {
        
        const list = async() => {
        const li = services.filter(element => element._id === listingid)
        li.map(item => (
            console.log(item, 'polol'),
            setListing(item)
        ))
        
       
        }

        list()
        
    }, [])

    /*setListing({
        service_name: list.service_name,
        description: list.description,
        category: list.category,
        price: list.price,
        add: list.business_address
    })*/
    

        return (
            <div >
                <div className="float-child1">
                <h2 style = {{paddingLeft : '0px',paddingTop:'35px'}}>{listing.service_name}</h2>
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
                    <p style = {{paddingTop : '100px', fontSize : '20px'}}>Description: {listing.description}</p>
                    <p style = {{paddingTop : '20px', fontSize : '20px'}}>Category: {listing.category}</p>
                    <p style = {{paddingTop : '20px', fontSize : '20px'}}>Price: {listing.price}</p>
                    <p style = {{paddingTop : '20px', fontSize : '20px'}}>Business Address: {listing.business_address}</p>
                </div>
            </div>
            
        );
    }


export default Individual_listing;