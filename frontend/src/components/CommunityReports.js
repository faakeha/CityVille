import React, { useState } from "react";
import "./SellerAppointments.css";
import Axios from "axios";
import { Card, Button, Row } from "react-bootstrap";

function CommunityReports() {
	const responses = [
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			report_status: "Rejected",
			description: "desc desc desc",
			date: "1602442800000",
		},
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			report_status: "Pending",
			description: "desc desc desc",
			date: "1602442800000",
		},
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			report_status: "Approved",
			description: "desc desc desc",
			date: "1602442800000",
		},
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			report_status: "Approved",
			description: "desc desc desc",
			date: "1602442800000",
		},
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			report_status: "Approved",
			description: "desc desc desc",
			date: "1602442800000",
		},
		{
			_id: "6260afc9f481f2aa958617ef",
			to_user_id: "242424242424242424242422",
			from_user_id: "130390394309430943093093",
			report_status: "Approved",
			description: "desc desc desc",
			date: "1602442800000",
		},
	];

	const [reports, setReports] = useState(null);
	const getAppointments = () => {
		///Axios.get("http://localhost:4000/api/auth/getApp").then((response) => {
		//console.log(response);
		setReports(responses.data);
		//}
		//);
	};
	const [filteredReports, setfilteredReports] = useState(null);

	const [isPending, setIsPending] = useState(null);

	const [isApproved, setIsApproved] = useState(null);

	const [isRejected, setIsRejected] = useState(null);

	var approved = responses.filter((e) => e.report_status === "Approved");
	var rejected = responses.filter((e) => e.report_status === "Rejected");
	var pending = responses.filter((e) => e.report_status === "Pending");

	function showApproved() {
		setIsApproved(true);
		setIsRejected(false);
		setIsPending(false);
		setfilteredReports(approved);
	}

	function showRejected() {
		setIsApproved(false);
		setIsRejected(true);
		setIsPending(false);
		setfilteredReports(rejected);
	}

	function showPending() {
		setIsApproved(false);
		setIsRejected(false);
		setIsPending(true);
		setfilteredReports(pending);
	}
	return (
		<div className="main-content">
			<h1 className=".appointments-h1">Review Community Reports</h1>
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

			{filteredReports &&
				filteredReports.map((response) => {
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
												</div>
											)}
											{isPending === true && (
												<div className="test">
													<p>
														<b>To User: </b> {response.to_user_id}
													</p>
												</div>
											)}
											{isRejected === true && (
												<div className="test">
													<p>
														<b>To User: </b> {response.to_user_id}
													</p>
												</div>
											)}

											<p>
												<b>From User: </b>
												{response.from_user_id}
											</p>

											<p>
												<b>Status: </b>
												{response.report_status}
											</p>
											<p>
												<b>Description: </b>
												{response.description}
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

export default CommunityReports;
