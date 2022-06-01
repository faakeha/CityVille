import React, { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import "./SellerProfile.css";
import { GlobalState } from "../GlobalState";
import {Link,  useParams } from 'react-router-dom';


const SellerProfile = () => {
	const params = useParams();
	const uid = params.id;
	console.log(uid)
	const userid = uid ? uid : -1
	


	//const [response, setResponse] = useState();
	const [name, setName] = useState();
	const [ID, setID] = useState();

	const state = useContext(GlobalState);
	const [services] = state.services;
	const [listing, setListing] = useState([]);
	var id = ''

	

	const get_user = async (event) => {
		console.log("in login method");
		const token = localStorage["userToken"];

		if(userid !== -1){
			console.log('in userid if')
			id = userid
			console.log(userid, 'id')
			const data = await fetch(`http://localhost:3001/CityVille/users?id=${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				token: `Bearer ${token}`,
			},
		});

		const res = await data.json();
		console.log("eeeeeeeeeeeeeeeeeeeeee", res);
		
		setName(res.first_name + " " + res.last_name);
		setID(res._id);
			
		}
		else{
			console.log('in userid else')
			id = localStorage["user_id"];
			const data = await fetch(`http://localhost:3001/CityVille/user/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				token: `Bearer ${token}`,
			},
		});

		const res = await data.json();
		console.log("eeeeeeeeeeeeeeeeeeeeee", res);
		
		setName(res[0].first_name + " " + res[0].last_name);
		setID(res[0]._id);
		}

		//event.preventDefault()
		
	};

	console.log("lalal", name);
	console.log("id", ID);

	useEffect(
		(e) => {
			const list = async (e) => {
				const li = services.filter((element) => element.user_id === ID);
				console.log(li);

				li.map(
					(item) => (
						console.log(item, "polol"),
						setListing((oldlisting) => [...oldlisting, item])
					)
				);
			};

			get_user(e);
			list(e);
		},
		[name, ID]
	);

	console.log("listing", listing[0]);
	return (
		<div>
			<div className="main-div" style={{ height: "55vh" }}>
				<div className="heading">
					<h2 style={{ paddingLeft: "40px", paddingTop: "35px" }}>{name}</h2>
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
						<Card.Body style={{ width: "25rem" }}>
							Review 1
						</Card.Body>
					</Card>
					<Card className="main-card">
						<Card.Body style={{ width: "25rem" }}>
							Review 2
						</Card.Body>
					</Card>
					<Card className="main-card">
						<Card.Body style={{ width: "25rem" }}>
							Review 3
						</Card.Body>
					</Card>
				</div>
			</div>

			<div className="bottom-sp-bar">
				{listing.map((service) => (
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
							<p ><Link to={`/Individual_Listing/${service._id}/${service.user_id}`} style={{textDecoration: "none", color:"black"}}>{service.service_name}</Link></p>

							<br></br>
						</div>
					</div>
				))}

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
