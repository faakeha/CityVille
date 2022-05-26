import React, { useState } from "react";
import "./SellerAppointments.css";
import Axios from "axios";
import { Card, Button, Row } from "react-bootstrap";

function CustomerAppointments() {
	const responses = [
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			service_id: "6260b03ff481f2aa958617f1",
			status: "Pending",
			date: "1602442800000",
			alternate_date: "1665514800000",
		},
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			service_id: "6260b03ff481f2aa958617f1",
			status: "Pending",
			date: "1602442800000",
			alternate_date: "1665514800000",
		},
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			service_id: "6260b03ff481f2aa958617f1",
			status: "Pending",
			date: "1602442800000",
			alternate_date: "1665514800000",
		},
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			service_id: "6260b03ff481f2aa958617f1",
			status: "Approved",
			date: "1602442800000",
			alternate_date: "1665514800000",
		},
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			service_id: "6260b03ff481f2aa958617f1",
			status: "Approved",
			date: "1602442800000",
			alternate_date: "1665514800000",
		},
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			service_id: "6260b03ff481f2aa958617f1",
			status: "Rejected",
			date: "1602442800000",
			alternate_date: "1665514800000",
		},
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			service_id: "6260b03ff481f2aa958617f1",
			status: "Cancelled",
			date: "1602442800000",
			alternate_date: "1665514800000",
		},
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			service_id: "6260b03ff481f2aa958617f1",
			status: "Completed",
			date: "1602442800000",
			alternate_date: "1665514800000",
		},
	];

	const [appointments, setAppointments] = useState(null);
	const getAppointments = () => {
		///Axios.get("http://localhost:4000/api/auth/getApp").then((response) => {
		//console.log(response);
		setAppointments(responses.data);
		//}
		//);
	};
	const [filteredAppointments, setfilteredAppointments] = useState(null);

	const [isPending, setIsPending] = useState(null);

	const [isApproved, setIsApproved] = useState(null);

	const [isRejected, setIsRejected] = useState(null);

	const [isCompleted, setIsCompleted] = useState(null);

	const [isCancelled, setIsCancelled] = useState(null);

	var approved = responses.filter((e) => e.status === "Approved");
	var rejected = responses.filter((e) => e.status === "Rejected");
	var pending = responses.filter((e) => e.status === "Pending");
	var completed = responses.filter((e) => e.status === "Completed");
	var cancelled = responses.filter((e) => e.status === "Cancelled");

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
				filteredAppointments.map((response) => {
					return (
						<div>
							<div className="cards">
								<Card className="customCard" style={{ width: "70rem" }}>
									<Card.Body>
										<Card.Text className="card-text">
											{isApproved === true && (
												<div className="test">
													<p>
														<b>To User: </b> {response.to_user_id}
													</p>
													<p>
														<b>Acceptance Date: </b> {response.alternate_date}
													</p>
												</div>
											)}
											{isPending === true && (
												<div className="test">
													<p>
														<b>To User: </b> {response.to_user_id}
													</p>
													<p>
														<b>Recieval Date: </b> {response.date}
													</p>
												</div>
											)}
											{isRejected === true && (
												<div className="test">
													<p>
														<b>To User: </b> {response.to_user_id}
													</p>
													<p>
														<b>Rejection Date: </b> {response.alternate_date}
													</p>
												</div>
											)}
											{isCompleted === true && (
												<div className="test">
													<p>
														<b>To User: </b> {response.to_user_id}
													</p>
													<p>
														<b>Completion Date: </b> {response.alternate_date}
													</p>
												</div>
											)}

											{isCancelled === true && (
												<div className="user-date">
													<p>
														<b>To User: </b> {response.to_user_id}
													</p>
													<p>
														<b>Cancellation Date: </b> {response.alternate_date}
													</p>
												</div>
											)}

											<p>
												<b>From User: </b>
												{response.from_user_id}
											</p>
											<p>
												<b>For Service: </b>
												{response.service_id}
											</p>
											<p>
												<b>Status: </b>
												{response.status}
											</p>
											<div className="date-report">
												<p>
													<b>Date: </b>
													{response.date}
												</p>
												<a className="report-link" href="">
													Report Customer
												</a>
											</div>
										</Card.Text>
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
