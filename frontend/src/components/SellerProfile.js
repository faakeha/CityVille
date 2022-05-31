import React from "react";
import { Card } from "react-bootstrap";
import "./SellerProfile.css";

const SellerProfile = () => {
	return (
		<div>
			<div className="main-div">
				<div className="heading">
					<h2 style={{ paddingLeft: "40px", paddingTop: "35px" }}>
						Service Provider Name
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
								maxHeight: "17px",
								maxWidth: "17px",
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
							This is a card this is a card this is a carddddddddddddddd
						</Card.Body>
					</Card>
					<Card className="main-card">
						<Card.Body>
							This is a card this is a card this is a carddddddddddddddd
						</Card.Body>
					</Card>
					<Card className="main-card">
						<Card.Body>
							This is a card this is a card this is a carddddddddddddddd
						</Card.Body>
					</Card>
				</div>
			</div>

			<div className="bottom-sp-bar">
				{
					// yaha
					// map function
					// lagy
					// ga
				}
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
				</div>
			</div>
		</div>
	);
};
export default SellerProfile;
