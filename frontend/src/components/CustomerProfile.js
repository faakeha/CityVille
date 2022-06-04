import React, { useState, useEffect, useContext } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { GlobalState } from "../GlobalState";
import "./CustomerProfile.css";
import SellerAppointments from "./SellerAppointments";

function CustomerProfile() {
	const [response, setResponse] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [address, setAddress] = useState();
	const [cnic, setCnic] = useState();
	const [editMode, setEditMode] = useState();

	const id = localStorage["user_id"];
	const token = localStorage["userToken"];

	const get_user = async (event) => {
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
		console.log("iiiiiii", res);
		console.log(res.email);
		setResponse(res);
		setName(res[0].first_name + " " + res[0].last_name);
		setEmail(res[0].email);
		setPhone(res[0].phone_number);
		setAddress(res[0].address);
		setCnic(res[0].cnic_number);
	};

	console.log("lalal", name);

	useEffect((e) => {
		get_user(e);
	}, []);

	async function update_user(id, resp) {
		const token = localStorage["userToken"];
		console.log("id", id);
		//console.log("new_status", new_status);
		//event.preventDefault()
		const res = await fetch(
			`http://localhost:3001/CityVille/updateUser/${id}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					token: `Bearer ${token}`,
				},
				body: JSON.stringify({
					email: resp["email"],
					phone_number: resp["phone_number"],
					cnic_number: resp["cnic_number"],
					address: resp["address"]

					
				}),
			}
		);

		console.log("e", res);

		//setResponse(res);
	}

	const resp = {};
	const buttonHandler = () => {
		console.log("inside button handler");
		setEditMode(!editMode);
		resp["email"] = email;
		resp["phone_number"] = phone;
		resp["address"] = address;
		resp["cnic_number"] = cnic;

		if (editMode === true) {
			update_user(id, resp)
		}
	};

	return (
		<div className="main-div">
			<div className="heading">
				<h2 style={{ paddingLeft: "40px", paddingTop: "35px" }}>{name}</h2>
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

			<div className="form div">
				<h3> Edit Credentials </h3>

				<Form className="form">
					{editMode === true ? (
						<div>
							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="text"
									placeholder="Email"
									defaultValue={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Phone</Form.Label>
								<Form.Control
									defaultValue={phone}
									onChange={(e) => setPhone(e.target.value)}
									type="text"
									placeholder="Your Phone Number"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Address</Form.Label>
								<Form.Control
									defaultValue={address}
									onChange={(e) => setAddress(e.target.value)}
									type="text"
									placeholder="Enter the address"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>CNIC</Form.Label>
						<Form.Control
							defaultValue={cnic}
							onChange={(e) => setCnic(e.target.value)}
							type="text"
							placeholder="CNIC"
						/>
					</Form.Group>
						</div>
					) : (
						<div>
							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Email</Form.Label>
								<Form.Control
									readOnly
									type="text"
									placeholder="Email"
									defaultValue={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Phone</Form.Label>
								<Form.Control
									readOnly
									defaultValue={phone}
									onChange={(e) => setPhone(e.target.value)}
									type="text"
									placeholder="Your Phone Number"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Address</Form.Label>
								<Form.Control
									readOnly
									defaultValue={address}
									onChange={(e) => setAddress(e.target.value)}
									type="text"
									placeholder="Enter the address"
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>CNIC</Form.Label>
							<Form.Control
							readOnly
							defaultValue={cnic}
							onChange={(e) => setCnic(e.target.value)}
							type="text"
							placeholder="CNIC"
						/>
					</Form.Group>
						</div>
					)}
					
					<Button
						onClick={buttonHandler}
						variant="warning"
						type="button"
						className="submit-button"
					>
						{editMode ? "Save" : "Edit"}
					</Button>
				</Form>
			</div>
		</div>
	);
}

export default CustomerProfile;
