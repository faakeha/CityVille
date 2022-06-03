import React, { useState, useEffect, useContext } from "react";
import "./CustomerAppointments.css";
import { GlobalState } from "../GlobalState";
//import Axios from "axios";
import { Card, Button, Row } from "react-bootstrap";


function CustomerAppointments() {
	//const [responses, setResponse] = useState([]);
	const [filteredAppointments, setfilteredAppointments] = useState([]);
	const state = useContext(GlobalState);
	const [response] = state.globalUser.app;
	const [user] = state.globalUser.user;
	const [allUsers] = state.globalUser.allUsers;
	const [services] = state.services;

	const today = Date.now();
	console.log(today)

	console.log(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(today));

	const [dates, setDates] = useState([]);
	const [names, setNames] = useState([]);

	//console.log(format(new Date(), 'yyyy/MM/dd kk:mm:ss'))



	console.log("all users", allUsers);
	console.log("services", services);


	console.log("in login method", response);
	console.log("names", names);

	//const today = Date.now();

	// console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today));



	/*async function getuser(){
		var toUser = {}
		filteredAppointments.map(app => {
			allUsers.map(user => {
				if(app.to_user_id === user._id){
					setNames(names => [...names, user.first_name+" "+user.last_name])
				}
			})
			//toUser = allUsers.findindex(user => user._id === app.to_user_id),
			
			
	})
			
		
	}*/

	useEffect(() => {
		const getuser = async () => {
			//console.log('in const')
			filteredAppointments.forEach(app => {
				allUsers.forEach(user => {
					//console.log(app.to_user_id, user._id)
					if (app.to_user_id === user._id) {
						setNames(names => [...names, user.first_name + " " + user.last_name])
					}
				})
				//toUser = allUsers.findindex(user => user._id === app.to_user_id),


			})


		}


		const getDates = async () => {
			filteredAppointments.forEach(app => {
				 
				var d = new Date(app.createdAt);

				var date = d.getDate();
				var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
				var year = d.getFullYear();
				var newDate = date + "/" + month + "/" + year;
				setDates(dates => [...dates, newDate])

			})
		}

		getuser()
		getDates()


	}, [filteredAppointments])

	async function update_app(id, new_status) {
		const token = localStorage["userToken"];
		console.log("id", id);
		console.log("new_status", new_status);
		//event.preventDefault()
		const res = await fetch(`http://localhost:3001/CityVille/updateApp/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				token: `Bearer ${token}`,
			},
			body: JSON.stringify({
				approve_status: new_status,
			}),
		});

		console.log("e", res);
		setfilteredAppointments(approved);
		setfilteredAppointments(rejected);
		setfilteredAppointments(pending);
		setfilteredAppointments(completed);
		setfilteredAppointments(cancelled);
	}

	// useEffect((e) => {
	// 	get_com_app(e)
	//    }, []);

	// const responses = [
	// 	{
	// 		_id: "6260afc9f481f2aa958617ef",
	// 		to_user_id: "242424242424242424242422",
	// 		from_user_id: "130390394309430943093093",
	// 		service_id: "6260b03ff481f2aa958617f1",
	// 		approve_status: "Pending",
	// 		date: "1602442800000",
	// 		alternate_date: "1665514800000",
	// 	},
	// 	{
	// 		_id: "6260afc9f481f2aa958617ef",
	// 		to_user_id: "242424242424242424242422",
	// 		from_user_id: "130390394309430943093093",
	// 		service_id: "6260b03ff481f2aa958617f1",
	// 		approve_status: "Pending",
	// 		date: "1602442800000",
	// 		alternate_date: "1665514800000",
	// 	},
	// 	{
	// 		_id: "6260afc9f481f2aa958617ef",
	// 		to_user_id: "242424242424242424242422",
	// 		from_user_id: "130390394309430943093093",
	// 		service_id: "6260b03ff481f2aa958617f1",
	// 		approve_status: "Pending",
	// 		date: "1602442800000",
	// 		alternate_date: "1665514800000",
	// 	},
	// 	{
	// 		_id: "6260afc9f481f2aa958617ef",
	// 		to_user_id: "242424242424242424242422",
	// 		from_user_id: "130390394309430943093093",
	// 		service_id: "6260b03ff481f2aa958617f1",
	// 		approve_status: "Approved",
	// 		date: "1602442800000",
	// 		alternate_date: "1665514800000",
	// 	},
	// 	{
	// 		_id: "6260afc9f481f2aa958617ef",
	// 		to_user_id: "242424242424242424242422",
	// 		from_user_id: "130390394309430943093093",
	// 		service_id: "6260b03ff481f2aa958617f1",
	// 		approve_status: "Approved",
	// 		date: "1602442800000",
	// 		alternate_date: "1665514800000",
	// 	},
	// 	{
	// 		_id: "6260afc9f481f2aa958617ef",
	// 		to_user_id: "242424242424242424242422",
	// 		from_user_id: "130390394309430943093093",
	// 		service_id: "6260b03ff481f2aa958617f1",
	// 		approve_status: "Rejected",
	// 		date: "1602442800000",
	// 		alternate_date: "1665514800000",
	// 	},
	// 	{
	// 		_id: "6260afc9f481f2aa958617ef",
	// 		to_user_id: "242424242424242424242422",
	// 		from_user_id: "130390394309430943093093",
	// 		service_id: "6260b03ff481f2aa958617f1",
	// 		approve_status: "Cancelled",
	// 		date: "1602442800000",
	// 		alternate_date: "1665514800000",
	// 	},
	// 	{
	// 		_id: "6260afc9f481f2aa958617ef",
	// 		to_user_id: "242424242424242424242422",
	// 		from_user_id: "130390394309430943093093",
	// 		service_id: "6260b03ff481f2aa958617f1",
	// 		approve_status: "Completed",
	// 		date: "1602442800000",
	// 		alternate_date: "1665514800000",
	// 	},
	// ];

	// const [appointments, setAppointments] = useState(null);
	// const getAppointments = () => {
	// 	///Axios.get("http://localhost:4000/api/auth/getApp").then((response) => {
	// 	//console.log(response);
	// 	setAppointments(response.data);
	// 	//}
	// 	//);
	// };


	const [isPending, setIsPending] = useState(null);

	const [isApproved, setIsApproved] = useState(null);

	const [isRejected, setIsRejected] = useState(null);

	const [isCompleted, setIsCompleted] = useState(null);

	const [isCancelled, setIsCancelled] = useState(null);

	var approved = response.filter((e) => e.approve_status === "Approved");
	var rejected = response.filter((e) => e.approve_status === "Rejected");
	var pending = response.filter((e) => e.approve_status === "Pending");
	var completed = response.filter((e) => e.approve_status === "Completed");
	var cancelled = response.filter((e) => e.approve_status === "Cancelled");

	function showApproved() {
		setIsApproved(true);
		setIsRejected(false);
		setIsPending(false);
		setIsCancelled(false);
		setIsCompleted(false);
		setfilteredAppointments(approved);

	}

	function showRejected() {
		setIsApproved(false);
		setIsRejected(true);
		setIsPending(false);
		setIsCancelled(false);
		setIsCompleted(false);
		setfilteredAppointments(rejected);
	}

	function showPending() {
		setIsApproved(false);
		setIsRejected(false);
		setIsPending(true);
		setIsCancelled(false);
		setIsCompleted(false);
		setfilteredAppointments(pending);
	}

	function showCompleted() {
		setIsApproved(false);
		setIsRejected(false);
		setIsPending(false);
		setIsCancelled(false);
		setIsCompleted(true);
		setfilteredAppointments(completed);
	}

	function showCancelled() {
		setIsApproved(false);
		setIsRejected(false);
		setIsPending(false);
		setIsCompleted(false);
		setIsCancelled(true);
		setfilteredAppointments(cancelled);
	}

	console.log("appnts", filteredAppointments);

	// if(filteredAppointments.length === 0 && names.length === 0) return (
	// 	null
	// )

	return (

		<div className="main-content">
			<h1 className=".appointments-h1">My Appointments</h1>
			<div className="buttons">
				<Button
					id="approved-button"
					variant="outline-warning"
					onClick={() => showApproved()}
				>
					{" "}
					Approved{" "}
				</Button>
				<Button
					id="rejected-button"
					variant="outline-warning"
					onClick={() => showRejected()}
				>
					Rejected{" "}
				</Button>
				<Button
					id="pending-button"
					variant="outline-warning"
					onClick={() => showPending()}
				>
					{" "}
					Pending
				</Button>
				<Button
					id="completed-button"
					variant="outline-warning"
					onClick={() => showCompleted()}
				>
					{" "}
					Completed
				</Button>

				<Button
					id="pending-button"
					variant="outline-warning"
					onClick={() => showCancelled()}
				>
					{" "}
					Cancelled
				</Button>
			</div>

			{filteredAppointments &&
				filteredAppointments.map((response, index) => {

					return (
						<div>
							<div className="cards">
								<Card className="customCard" style={{ width: "70rem" }}>
									<Card.Body style={{ width: "65rem" }}>
										<Card.Text className="card-text">
											{isApproved === true && (
												<div className="test">
													<p>
														<b>To User: </b> {names[index]}
													</p>
													<p>
														<b>Acceptance Date: </b> {dates[index]}
													</p>
												</div>
											)}
											{isPending === true && (
												<div className="test">
													<p>
														<b>To User: </b> {names[index]}
													</p>
													<p>
														<b>Receival Date: </b> {dates[index]}
													</p>
												</div>
											)}
											{isRejected === true && (
												<div className="test">
													<p>
														<b>To User: </b> {names[index]}
													</p>
													<p>
														<b>Rejection Date: </b> {dates[index]}
													</p>
												</div>
											)}
											{isCompleted === true && (
												<div className="test">
													<p>
														<b>To User: </b> {names[index]}
													</p>
													<p>
														<b>Completion Date: </b> {dates[index]}
													</p>
												</div>
											)}

											{isCancelled === true && (
												<div className="user-date">
													<p>
														<b>To User: </b> {names[index]}
													</p>
													<p>
														<b>Cancellation Date: </b> {dates[index]}
													</p>
												</div>
											)}

											<p>
												<b>From User: </b>
												{user.first_name} {user.last_name}
											</p>

											<p>
												<b>Status: </b>
												{response.approve_status}
											</p>
											<div className="date-report">
												<p>
													<b>Date: </b>
													{dates[index]}
												</p>
												<a className="report-link" href="">
													Report Customer
												</a>
											</div>
										</Card.Text>
										<div className="decision-buttons">
											{isApproved === true && (
												<div className="apr-buttons">
													<Button
														onClick={() =>
															update_app(response._id, "Cancelled")
														}
														className="apr-btn"
														variant="outline-warning"
													>
														Cancel
													</Button>

												</div>
											)}
										</div>
										<div className="decision-buttons">
											{isPending === true && (
												<div className="apr-buttons">
													<Button
														onClick={() =>
															update_app(response._id, "Cancelled")
														}
														className="apr-btn"
														variant="outline-warning"
													>
														Cancel
													</Button>

												</div>
											)}
										</div>
									</Card.Body>
								</Card>
							</div>
						</div>
					);
				})}
		</div>
	);
}

export default CustomerAppointments;
