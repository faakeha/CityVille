import React, { useState, useEffect, useContext } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Searchbox from "./Searchbox";
import { GlobalState } from "../GlobalState";
import { Link } from "react-router-dom";

function Homepage() {
	const state = useContext(GlobalState);
	console.log("abc", state);
	const [categoriesG] = state.categories;
	//const [sp, setSp] = useState([''])
	const [sp] = state.users;
	const [user, setUser] = state.user;
	console.log("first", user);
	//const userToken = localStorage.getItem('userToken')

	// Promise.all([
	//   fetch('http://localhost:3001/CityVille/Login'),
	//   fetch('http://localhost:3001/CityVille/getRole')
	// ]).then(function (responses) {
	//   // Get      a JSON object from each of the responses
	//   return Promise.all(responses.map(
	//     function (response) {
	//     return response.json();
	//   }));
	// }).then(function (data) {
	//   // Log the data to the console
	//   // You would do something with both sets of data here
	//   console.log('login response', data[0]);
	//   console.log('get role response', data[1]);

	// }).catch(function (error) {
	//   // if there's an error, log it
	//   console.log(error);
	// });

	useEffect((e) => {
		//allServices(e)
	}, []);

	const getsp = sp.map((item) => (
		<div className="form-group l">
			<Link to={`/SellerProfile/${item._id}`}>
				<img
					src={item.image}
					style={{
						width: 100,
						height: 100,
					}}
					alt="user"
					className="roundimg"
				></img>
			</Link>
			<div>
				<p>
					{item.first_name} {item.last_name}
				</p>

				<br></br>
			</div>
		</div>
	));

	const getcategories = categoriesG.map((item) => (
		<div className="form-group l">
			<img
				className="img"
				src="https://res.cloudinary.com/dbmknff2i/image/upload/v1650369466/users/x_pbf8xz.png"
				style={{
					width: 100,
					height: 100,
				}}
				alt="category"
			></img>
			<div>
				<p>{item}</p>
				<br></br>
			</div>
		</div>
	));

	//const SearchComp = Searchbox();

	return (
		<div className="hd">
			<div>
				<img
					src="https://res.cloudinary.com/dgx1uzhbr/image/upload/v1653949277/slider1_zdkf1o.jpg"
					style={{
						width: 1349,
						height: 300,
					}}
					alt="category"
				></img>
			</div>
			<Searchbox />
			<div className="scroll">
				<h4 className="cont pm">Top service providers</h4>
				<ScrollMenu>{getsp}</ScrollMenu>
			</div>
			<div className="scroll">
				<h4 className="cont pm">Categories</h4>
				<ScrollMenu className="space">{getcategories}</ScrollMenu>
			</div>
		</div>
	);
}

export default Homepage;
