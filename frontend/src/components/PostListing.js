import React, { useState, useContext } from "react";
import { Button, Form, Dropdown } from "react-bootstrap";
import "./PostListing.css";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { GlobalState } from '../GlobalState'

const PostListing = () => {
	const [selected, setSelected] = useState(null);
	const handleSelect = (key, value) => {
		setSelected(categories[key]);
		setCategory(selected);
	};

	const [service_name, setServiceName] = useState('');
	const [description, setDesc] = useState('');
	const [category, setCategory] = useState('');
	const [business_address, setAddress] = useState('');
	const [price, setPrice] = useState('');
	const [image_url, setImg] = useState('');
	const [response, setResponse] = useState([]);	
	const [isOpen, setIsOpen] = useState(false);
    const [msg, setMsg] = useState('')
	const state = useContext(GlobalState)
    const [cat] = state.categories;

	async function reg_service(event) {
		console.log("in login method");
		const token = localStorage["userToken"];
		const user_id = localStorage["user_id"];
		console.log(user_id, service_name, description, category, image_url, business_address, price)
		const image_url = "https://res.cloudinary.com/dbmknff2i/image/upload/v1653407708/cityville/cityville6_onzrct.jpg";
		event.preventDefault()
		const data = await fetch("http://localhost:3001/CityVille/createService", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				token: `Bearer ${token}`,
			},
			body: JSON.stringify({
				user_id, service_name, description, category, image_url, business_address, price 
			  })
		});

		const res = await data.json();
		console.log("eeeeeeeeeeeeeeeeeeeeee", res);
		setResponse(res);
		alert (res)
	}

	console.log(response)
	var categories = cat;
	return (
		<div>
			<div className="float-child1">
				<h2 style={{ paddingLeft: "0px", paddingTop: "35px" }}>
					Add Listing
				</h2>
				<img
					style={{ paddingLeft: "100px", paddingTop: "20px" }}
					src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/Image_t0wi4m.png"
					alt="Tesla"
				/>
				<div className="same_line">
					<p
						style={{
							fontSize: "16px",
							fontWeight: "5px",
							paddingLeft: "215px",
							paddingTop: "20px",
						}}
					>
						{localStorage['username']} 
					</p>
					&nbsp;&nbsp;&nbsp;
					<p style={{ paddingTop: "20px", fontSize: "16px" }}> </p>
					<img
						style={{
							paddingLeft: "5px",
							paddingTop: "27px",
							maxHeight: "17px",
							maxWidth: "17px",
						}}
						src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653748300/users/rating_star_d7webp.png"
						alt="Tesla"
					/>
				</div>
				<p style={{ paddingLeft: "0px", paddingTop: "0px" }}>
					{" "}
					
				</p>
				<Form>
				<Form.Group className="mb-2" controlId="formBasicPassword">
					<Form.Label className= "lb1">Service Name</Form.Label>
					<Form.Control className= "lb2"
					value = {service_name}
					onChange={(e) => setServiceName(e.target.value)}
					type="text" placeholder="Enter the service name" 
					
					/>
					
				</Form.Group>

					</Form>		

			</div>
			<Form  className="form">

			

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Description</Form.Label>
					<Form.Control
					value = {description}
					onChange={(e) => setDesc(e.target.value)}
						type="text"
						placeholder="Describe what your service is about"
						
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Select Category</Form.Label>

				</Form.Group>

				<Dropdown onSelect={handleSelect}>
					<Dropdown.Toggle
						id="dropdown-button-dark-example1"
						variant="light"
						className="toggle"
					>
						{selected === null ? "Select Relevant Category" : selected}
						

					</Dropdown.Toggle>

					<Dropdown.Menu  className="drop-down" >
						{categories.map((value, index) => (
							<Dropdown.Item eventKey={index}>{value}
							</Dropdown.Item>
							
						))}
					</Dropdown.Menu>
					
				</Dropdown>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Price</Form.Label>
					<Form.Control
					value = {price}
					onChange={(e) => setPrice(e.target.value)}
						type="text"
						placeholder="Enter the price you want to sell your service for"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Address</Form.Label>
					<Form.Control 
					value = {business_address}
					onChange={(e) => setAddress(e.target.value)}
					type="text" placeholder="Enter your business address" 
					/>
				</Form.Group>

				<Button onClick= {reg_service} variant="warning" type="submit" className="submit-button">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default PostListing;
