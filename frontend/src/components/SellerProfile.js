import React, {useState, useEffect, useContext} from "react";
import { Card } from "react-bootstrap";
import "./SellerProfile.css";
import { GlobalState } from '../GlobalState'


const SellerProfile = () => {
	const [response, setResponse] = useState()
  const [name, setName] = useState()
  const [ID, setID] = useState()
  const state = useContext(GlobalState)
	const [services] = state.services
	const [listing, setListing] = useState([])
  
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
		setID(res[0]._id)
	}
  
  console.log('lalal', name)
  console.log('id', ID)
  

  //const li = services.filter(element => element.user_id === ID)



  useEffect((e) => {
    
	const list = async(e) => {
        const li = services.filter(element => element.user_id === ID)
		console.log(li)

        li.map((item) => (
            console.log(item, 'polol'),
            setListing(oldlisting => [...oldlisting, item])
        ))
        
       
        }
		get_user(e);
        list(e)
		
	
  }, [name])

  console.log('listing', listing[0])
	return (
		<div>
			<div className="main-div" style={{height:"55vh"}}>
				<div className="heading">
					<h2 style={{ paddingLeft: "40px", paddingTop: "35px" }}>
						{name}
					</h2>
					<img
						style={{ paddingLeft: "100px", paddingTop: "20px" }}
						src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/Image_t0wi4m.png"
						alt="Tesla"
					/>
					
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

			<div className="bottom-sp-bar">
				{
					listing.map(service => (
				<div className="form-group l">
					<img
						src={
							"https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/rating_star_d7webp.png"
						}
						style={{
							width: 100,
							height: 100,
						}}
						alt="user"
						
					></img>
					<div>
						<p>{service.service_name}</p>

						<br></br>
					</div>
				</div>
					))
				}
				
				{/* <div className="form-group l">
					<img
						src={
							"https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/rating_star_d7webp.png"
						}
						style={{
							width: 100,
							height: 100,
						}}
						alt="user"
						className="roundimg"
					></img>
					<div>
						<p>name</p>

						<br></br>
					</div>
				</div>
				<div className="form-group l">
					<img
						src={
							"https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/rating_star_d7webp.png"
						}
						style={{
							width: 100,
							height: 100,
						}}
						alt="user"
						className="roundimg"
					></img>
					<div>
						<p>name</p>

						<br></br>
					</div>
				</div>
				<div className="form-group l">
					<img
						src={
							"https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/rating_star_d7webp.png"
						}
						style={{
							width: 100,
							height: 100,
						}}
						alt="user"
						className="roundimg"
					></img>
					<div>
						<p>name</p>

						<br></br>
					</div> 
				</div>*/}
			</div>
		</div>
	);
};
export default SellerProfile;
