import React, { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import "./SellerProfile.css";
import { GlobalState } from "../GlobalState";
import { Link, useParams } from 'react-router-dom';
import { Button } from "react-bootstrap";



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
		const fromid = localStorage["user_id"];
var today = new Date(); 

		if (userid !== -1) {
			console.log('in userid if')
			id = userid
			console.log(userid, 'id')
			const result = fetch(`http://localhost:3001/CityVille/users?id=${id}`, { 
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					token: `Bearer ${token}`,
				},
			 })
				.then(response => response.json()) // pass the data as promise to next then block
				.then(data => {
					setName(data.first_name + " " + data.last_name);
					setID(data._id);

					console.log(data, '\n');

					return fetch(`http://localhost:3001/CityVille/createAppointment`, {
						method: "POST",
				headers: {
					"Content-Type": "application/json",
					token: `Bearer ${token}`,
				},
				body:JSON.stringify({
					to_user_id: userid,
					from_user_id: fromid,
					date: today.getDate()

				})
					}); // make a 2nd request and return a promise
				})
				.then(response => response.json())
				.catch(err => {
					console.error('Request failed', err)
				})

			// I'm using the result const to show that you can continue to extend the chain from the returned promise
			result.then(r => {
				console.log(r); // 2nd request result first_stage property
			});

			// 	const data = await fetch(`http://localhost:3001/CityVille/users?id=${id}`, {
			// 	method: "GET",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 		token: `Bearer ${token}`,
			// 	},
			// });

			// const res = await data.json();
			// console.log("eeeeeeeeeeeeeeeeeeeeee", res);

			

		}
		else {
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

					<Link to="/CustomerAppointments">

						<Button style={{ width: "250px" }}>
							Request an appointment
						</Button>

					</Link>
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
							<p ><Link to={`/Individual_Listing/${service._id}/${service.user_id}`} style={{ textDecoration: "none", color: "black" }}>{service.service_name}</Link></p>

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
