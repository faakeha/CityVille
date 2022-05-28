import React, { useState } from "react";
import "./SellerAppointments.css";
import Axios from "axios";
import { Card, Button, Row } from "react-bootstrap";

function ReviewListings() {
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
	];

	const [appointments, setAppointments] = useState(null);
	const getAppointments = () => {
		///Axios.get("http://localhost:4000/api/auth/getApp").then((response) => {
		//console.log(response);
		setAppointments(responses.data);
		//}
		//);
	};
	const [filteredListings, setFilteredListings] = useState(null);

	const [isPending, setIsPending] = useState(null);

	const [isApproved, setIsApproved] = useState(null);

	const [isRejected, setIsRejected] = useState(null);

	var approved = responses.filter((e) => e.status === "Approved");
	var rejected = responses.filter((e) => e.status === "Rejected");
	var pending = responses.filter((e) => e.status === "Pending");

	function showApproved() {
		setIsApproved(true);
		setIsRejected(false);
		setIsPending(false);
		setFilteredListings(approved);
	}

	function showRejected() {
		setIsApproved(false);
		setIsRejected(true);
		setIsPending(false);
		setFilteredListings(rejected);
	}

	function showPending() {
		setIsApproved(false);
		setIsRejected(false);
		setIsPending(true);
		setFilteredListings(pending);
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
			</div>

			{filteredListings &&
				filteredListings.map((response) => {
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
											<p>
												<b>Date: </b>
												{response.date}
											</p>
										</Card.Text>
										<div className="decision-buttons">
											{isPending === true && (
												<div className="apr-buttons">
													<Button className="apr-btn" variant="outline-warning">
														Accept
													</Button>
													<Button className="rej-btn" variant="outline-warning">
														Rejcet
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

export default ReviewListings;
