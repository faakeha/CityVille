import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, withRouter } from "react-router-dom";
import logo from "../logo.svg";
import Register from "./Register";
import { GlobalState } from "../GlobalState";

// function logout() {
//   //localStorage.clear()
//   console.log(localStorage)
// }

function Header1() {
	const state = useContext(GlobalState);
	const [user, setUser] = state.globalUser.user;
	//const role = localStorage.getItem('user_role')
	const [role, setRole] = state.globalUser.role;
	const sid = 3;
	const cid = 2;

	console.log(user)
	useEffect(() => {
		
	}, [role])

	console.log(role, "role is ");

	window.addEventListener("storage", () => {
		console.log("change to local storage!");
		setRole(localStorage.getItem("user_role"));
	});

	// function logout() {

	//localStorage.clear()
	// console.log(localStorage)
	// const token = localStorage['userToken']
	// const username = localStorage['username'];

	async function logout() {
		//event.preventDefault()
		console.log("in logout");
		const token = user.token;
		//event.preventDefault()
		/*const data = await fetch("http://localhost:3001/CityVille/logout", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				token,
			}),
		});*/

		//const response = await data.json();
		console.log("before set");
		window.localStorage.setItem("user_role", "0");
		window.localStorage.setItem("userToken", "");
		window.localStorage.setItem("user_id", "");
		window.localStorage.setItem("username", "");

		window.dispatchEvent(new Event("storage"));
		//setRole()
		setUser({
			id: "",
			first_name: "",
			last_name: "",
			token: "",
		});
	}

	console.log("hello", localStorage.getItem("user_role"));
	//check()

	//}

	const username = localStorage.getItem('username')

	if (role === "1") {
		return (
			<div className="flex-container">
				<h1 className="header_title">CityVille</h1>
				<Link
					to="/Homepage"
					className="header_home"
					style={{ textDecoration: "none", paddingRight: "55px" }}
				>
					Home
				</Link>
				&nbsp;
				<Link
					to="/CommunityReports"
					className="header_service"
					style={{ textDecoration: "none", paddingRight: "55px" }}
				>
					Reports
				</Link>
				&nbsp;
				<Link
					to="/SellerRequests"
					className="header_service"
					style={{ textDecoration: "none", paddingRight: "55px" }}
				>
					Listings
				</Link>
				&nbsp;
				<Link
					to="/Homepage"
					className="header_service"
					onClick={logout}
					style={{ textDecoration: "none", paddingRight: "105px" }}
				>
					Logout
				</Link>
				&nbsp;
				<Link
					to="/Profile"
					className="header_user"
					style={{ textDecoration: "none", fontSize: "15px", color: "#ffffff" }}
				>
					{username}
				</Link>
				&nbsp;&nbsp;
				<img
					src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653947860/users/profile_u6z026.png"
					style={{
						width: 60,
						height: 55,
					}}
					className="roundimg"
					alt="user"
				></img>
			</div>
		);
	} else if (role === "3") {
		return (
			<div className="flex-container">
				<h1 className="header_title">CityVille</h1>
				<Link
					to="/Homepage"
					className="header_home"
					style={{ textDecoration: "none", paddingRight: "10px" }}
				>
					Home
				</Link>
				&nbsp;
				<Link
					to="/Services"
					className="header_service"
					style={{ textDecoration: "none", paddingRight: "10px" }}
				>
					Services
				</Link>
				&nbsp;
				<Link
					to="/SellerAppointments"
					className="header_service"
					style={{ textDecoration: "none", paddingRight: "10px" }}
				>
					Appointments
				</Link>
				&nbsp;
				<Link
					to="/Homepage"
					className="header_service"
					onClick={logout}
					style={{ textDecoration: "none", paddingRight: "10px" }}
				>
					Logout
				</Link>
				&nbsp;
				<Link
					to="/PostListing"
					className="btn-primary col hdbtn"
					style={{
						textDecoration: "none",
						maxWidth: "150px",
						marginRight: "30px",
						marginLeft: "25px",
					}}
				>
					Add Service
				</Link>
				<Link
					to="/SellerProfile"
					className="header_user"
					style={{
						textDecoration: "none",
						fontSize: "15px",
						color: "#ffffff",
						paddingRight: "1px",
					}}
				>
					{username}
				</Link>
				&nbsp;&nbsp;
				<Link to={`/SellerProfile/${localStorage.getItem("user_id")}`}>
					<img
						src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653947860/users/profile_u6z026.png"
						style={{
							width: 60,
							height: 55,
						}}
						className="roundimg"
						alt="user"
					></img>
				</Link>
			</div>
		);
	} else if (role === "2") {
		return (
			<div className="flex-container">
				<h1 className="header_title">CityVille</h1>
				<Link
					to="/Homepage"
					className="header_home"
					style={{ textDecoration: "none" }}
				>
					Home
				</Link>
				&nbsp;
				<Link
					to="/Services"
					className="header_service"
					style={{ textDecoration: "none" }}
				>
					Services
				</Link>
				&nbsp;
				<Link
					to="/CustomerAppointments"
					className="header_service"
					style={{ textDecoration: "none" }}
				>
					Appointments
				</Link>
				&nbsp;
				<Link
					to="/Homepage"
					className="header_service"
					onClick={logout}
					style={{ textDecoration: "none" }}
				>
					Logout
				</Link>
				&nbsp;
				<Link
					to="/CustomerProfile"
					className="header_user"
					style={{
						textDecoration: "none",
						fontSize: "15px",
						color: "#ffffff",
						paddingRight: "30px",
					}}
				>
					{username}
				</Link>
				<Link to="/CustomerProfile">
					<img
						src="https://res.cloudinary.com/dbmknff2i/image/upload/v1653947860/users/profile_u6z026.png"
						style={{
							width: 60,
							height: 55,
						}}
						className="roundimg"
						alt="user"
					></img>
				</Link>
			</div>
		);
	} else {
		return (
			<div className="flex-container">
				<h1 className="header_title">CityVille</h1>
				<Link
					to="/Homepage"
					className="header_home"
					style={{ textDecoration: "none" }}
				>
					Home
				</Link>
				&nbsp;
				<Link
					to="/Services"
					className="header_service"
					style={{ textDecoration: "none" }}
				>
					Services
				</Link>
				&nbsp;
				<Link
					to="/Login"
					className="header_service"
					style={{ textDecoration: "none" }}
				>
					Login
				</Link>
				&nbsp;
				<Link to={`/Register/${sid}`} className="btn-primary col hdbtn">
					Signup as Seller
				</Link>
				&nbsp;&nbsp;&nbsp;
				<Link to={`/Register/${cid}`} className="btn-primary col hdbtn">
					Signup as Customer
				</Link>
			</div>
		);
	}
}

export default Header1;
