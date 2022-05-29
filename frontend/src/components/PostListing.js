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
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Description</Form.Label>
					<Form.Control
						type="email"
						placeholder="Describe what your service is about"
					/>
				</Form.Group>

				<Dropdown onSelect={handleSelect}>
					<Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
						{selected === null ? "Select Category" : selected}
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
