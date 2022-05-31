import React, {useState, useEffect, useContext} from 'react'
import { Card } from "react-bootstrap";
import { GlobalState } from '../GlobalState';

function CustomerProfile() {
  const [response, setResponse] = useState()
  const [name, setName] = useState()
  
  
  const id = localStorage["user_id"]
  const token = localStorage["userToken"];

  

  const get_user = async(event) => {
		console.log("in login method");
		
    
		//event.preventDefault()
		const data = await fetch(`http://localhost:3001/CityVille/user/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				token: `Bearer ${token}`,
			},
		});

		const res = await data.json();
		console.log("eeeeeeeeeeeeeeeeeeeeee", res);
		setResponse(res);
		setName(res[0].first_name+" "+res[0].last_name)
		
	}
  
  console.log('lalal', name)


  useEffect((e) => {
    get_user(e);
	
  }, [])

  return (
    <div className='main-div'>
        <div className="heading">
					<h2 style={{ paddingLeft: "40px", paddingTop: "35px" }}>
						{name}
					</h2>
					<img
						style={{ paddingLeft: "100px", paddingTop: "20px" }}
						src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/Image_t0wi4m.png"
						alt="Tesla"
					/>
					<div className="">
						&nbsp;&nbsp;&nbsp;
						<img
							style={{
								paddingLeft: "5px",
								paddingTop: "27px",
								maxHeight: "30px",
								maxWidth: "30px",
							}}
							src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/rating_star_d7webp.png"
							alt="Tesla"
						/>
					</div>
				</div>
        <div className="card-wrapper">
					{
						// yaha
						// map function
						// lagy ga
					}
					<Card className="main-card">
						<Card.Body>
							Review 1
						</Card.Body>
					</Card>
					<Card className="main-card">
						<Card.Body>
							Review 2
						</Card.Body>
					</Card>
					<Card className="main-card">
						<Card.Body>
							Review 3
						</Card.Body>
					</Card>
				</div>
       
        
        

    </div>
  )
}

export default CustomerProfile