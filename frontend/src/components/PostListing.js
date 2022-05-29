import React, { useState } from "react";
import { Button, Form, Dropdown } from "react-bootstrap";
import "./PostListing.css";

const PostListing = () => {
	const [selected, setSelected] = useState(null);
	const handleSelect = (key, value) => {
		setSelected(categories[key]);
	};

	var categories = ["first", "second", "third"];
	return (
		<div>
			<div className="float-child1">
				<h2 style={{ paddingLeft: "0px", paddingTop: "35px" }}>
					House Cleaning
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
						Lilly Sharp
					</p>
					&nbsp;&nbsp;&nbsp;
					<p style={{ paddingTop: "20px", fontSize: "16px" }}> 3.5</p>
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
					Total Services: 5
				</p>
			</div>
			<Form className="form">
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Description</Form.Label>
					<Form.Control
						type="email"
						placeholder="Describe what your service is about"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Seletc Category</Form.Label>
				</Form.Group>

				<Dropdown onSelect={handleSelect}>
					<Dropdown.Toggle
						id="dropdown-button-dark-example1"
						variant="light"
						className="toggle"
					>
						{selected === null ? "Select Relevant Category" : selected}
					</Dropdown.Toggle>

					<Dropdown.Menu variant="secondary" className="drop-down" menuVariant>
						{categories.map((value, index) => (
							<Dropdown.Item eventKey={index}>{value}</Dropdown.Item>
						))}
					</Dropdown.Menu>
				</Dropdown>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Price</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter the price you want to sell your service for"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Address</Form.Label>
					<Form.Control type="text" placeholder="Enter your business address" />
				</Form.Group>

				<Button variant="warning" type="submit" className="submit-button">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default PostListing;
