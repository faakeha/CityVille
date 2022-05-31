const router = require("express").Router();
const User = require("../models/Users");
const Service = require("../models/Services");
const Appointment = require("../models/Appointments");
const Reports = require("../models/Community_Reports");
const CryptoJS = require("crypto-js");
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
const {
	verifyToken,
	verifyTokenAndAuth,
	verifyToken2,
} = require("./verifyToken");
const { validate } = require("../models/Users");
const Event = require("../models/Events");

let refresh_tokens_list = [];
//REGISTER

router.post("/register", async (req, res) => {
	const newUser = new User({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY),
		cnic_number: req.body.cnic_number,
		phone_number: req.body.phone_number,
		address: req.body.address,
		user_role: req.body.user_role,
	});
	try {
		const savedUser = await newUser.save();
		res.status(201).json({ status: 201, message: "User Registered" });
	} catch (err) {
		res.status(500).json({ status: 500, message: "Error" });
	}
});

//register event
router.post("/registerEvent", async (req, res) => {
	const newEvent = new Event({
		event_title: req.body.event_title,
		event_subtext: req.body.event_subtext,
		event_image_thumb: req.body.event_image_thumb,
		event_image_banner: req.body.event_image_banner,
		event_date: req.body.event_date,
		event_category: req.body.event_category,
		event_detail_text: req.body.event_detail_text,
		event_fee: req.body.event_fee,
		event_apply_now_url: req.body.event_apply_now_url,
		event_isFeatured: req.body.event_isFeatured,
	});
	try {
		const savedEvent = await newEvent.save();
		res.status(201).json("Event Registered");
	} catch (err) {
		res.status(500).json(err);
	}
});

//get events
router.get("/getAllEvents", async (req, res) => {
	const events = await Event.find();
	res.json(events);
});

//Create service
router.post("/createService", verifyToken, async (req, res) => {
	const user1 = await User.findOne({ _id: req.user.id });

	console.log(user1);
	const newService = await new Service({
		user_id: req.body.user_id,
		service_name: req.body.service_name,
		description: req.body.description,
		category: req.body.category,
		image_url: req.body.image_url,
		// reviews: req.body.reviews,
		// ratings: req.body.ratings,
		business_address: req.body.business_address,
		price: req.body.price,
	});
	if (user1.user_role == 3) {
		if (user1.id == newService.user_id) {
			try {
				const savedService = await newService.save();
				res.status(201).json({ status: 201, message: "Service Added" });
			} catch (err) {
				console.log(err);
				res.status(500).json({ status: 500, message: err });
			}
		} else {
			res
				.status(403)
				.json({ status: 403, message: "You are not permitted to do that." });
		}
	} else {
		res
			.status(403)
			.json({ status: 403, message: "You are not permitted to do that." });
	}
});

//get services
router.get("/Services", async (req, res) => {
	//const user1 =  await User.findOne({_id:req.user.id});
	if (!req?.query?.id) {
		//user
		const all_services = await Service.find(
			{ approve_status: "Approved" },
			{ is_paused: false }
		);
		res.json(all_services);
	}
	//get services of specified user
	else {
		console.log(req.query.id);
		const user_service = await Service.find({ user_id: req.query.id });
		res.json(user_service);
		if (!user_service) {
			res.json("Seller does not exist.");
		}
	}
});

//Update service
router.put("/updateService/:id", verifyToken, async (req, res) => {
	//service id will be given
	const user_service = await Service.findById(req.params.id);
	const user1 = await User.findOne({ _id: req.user.id });
	console.log(user_service);
	console.log(user1);
	if (user1.user_role == 3 && req.user.id == user_service.user_id) {
		if (req.body.approve_status || req.body.reviews || req.body.ratings) {
			console.log(user_service);
			res.json("Your are not authorized.");
		} else {
			try {
				const updatedUser = await Service.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body,
					},
					{ new: true }
				);
				res.status(200).json(updatedUser);
			} catch (err) {
				res.status(500).json(err);
			}
		}
	} else if (user1.user_role == 1) {
		if (!req.body.approve_status) {
			res.json("You are not authorized.");
		} else {
			try {
				const updatedUser = await Service.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body,
					},
					{ new: true }
				);
				res.status(200).json(updatedUser);
			} catch (err) {
				res.status(500).json(err);
			}
		}
	} else if (user1.user_role == 2) {
		if (!(req.body.reviews || req.body.ratings)) {
			res.json("You are not authorized.");
		} else {
			try {
				console.log(user1);
				const updatedUser = await Service.updateOne(
					{ _id: req.params.id },
					{
						$push: { reviews: req.body.reviews, ratings: req.body.ratings },
					},
					{ new: true }
				);
				res.status(200).json(updatedUser);
			} catch (err) {
				res.status(500).json(err);
			}
		}
	}
});

//LOGIN
router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) return res.status(401).json("Wrong Credentials");

		const decrypted_password = CryptoJS.AES.decrypt(
			user.password,
			process.env.SECRET_KEY
		);
		const pass = decrypted_password.toString(cryptoJs.enc.Utf8);

		if (pass !== req.body.password)
			return res.status(401).json("Wrong Credentials");

		const accessToken = jwt.sign(
			{
				id: user._id,
			},
			process.env.JWT_KEY,
			{ expiresIn: "4d" }
		);
		user.token = accessToken;
		user.save();
		//User.updateOne({ _id: user._id }, { $set: { token: accessToken } })

		const refreshToken = jwt.sign(
			{
				id: user._id,
			},
			process.env.REFRESH_KEY
		);

		refresh_tokens_list.push(refreshToken);
		//console.log('lmn', refresh_tokens_list);
		const { password, ...others } = user._doc;
		res.status(200).json({ ...others, accessToken, refreshToken });
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/token", (req, res) => {
	const refresh_token = req.body.token;

	if (refresh_token == null) {
		return res.status(401);
	}
	console.log("rf", refresh_token);
	// if(!(refresh_tokens_list.includes(refresh_token))){
	//     return res.send("logged out");
	// }
	jwt.verify(refresh_token, process.env.REFRESH_KEY, (err, user) => {
		if (err) return res.status(403);
		const accessToken = jwt.sign(
			{
				id: user._id,
			},
			process.env.JWT_KEY,
			{ expiresIn: "10m" }
		);
		res.json({ accessToken: accessToken });
	});
});

router.get("/profile", verifyToken, async (req, res) => {
	const user1 = await User.findOne({ _id: req.user.id });
	res.json(user1);
});

//get profile
router.get("/users", async (req, res) => {
	const user1 = await User.findOne({ _id: req.query.id });
	if (user1.user_role == 1) {
		if (!req?.query?.id) {
			const all_users = await User.find();
			res.json(all_users);
		} else {
			const user = await User.findById(req.query.id);
			res.json(user);
			if (!user) {
				res.json("User does not exist.");
			}
		}
	} else if (user1.user_role == 2) {
		if (!req?.query?.id) {
			const all_sellers = await User.find({ user_role: 3 });
			res.json(all_sellers);
		} else {
			const seller = await User.findById({ _id: req.query.id });
			if (seller.user_role != 3) {
				res.status(403).json("You are not authorized.");
			} else {
				res.json(seller);
			}
		}
	} else if (user1.user_role == 3) {
		if (!req?.query?.id) {
			const all_users = await User.find({ user_role: { $ne: 1 } });
			res.json(all_users);
		} else {
			const user = await User.findById({ _id: req.query.id });
			if (user.user_role == 1) {
				res.status(403).json("You are not authorized.");
			} else {
				res.json(user);
			}
		}
	} else {
		res.status(403).json("You are not authorized.");
	}
});

//getAllusers for home page
router.get("/sellers", async (req, res) => {
	const users = await User.find({ user_role: 3 });
	res.json(users);
});

router.get("/user/:id", verifyToken, async (req, res) => {
	if (req.user.id == req.params.id) {
		const user = await User.find({ _id: req.user.id });
		res.json(user);
	}
});

//Update user
router.put("/updateUser/:id", verifyToken, async (req, res) => {
	const user1 = await User.findOne({ _id: req.user.id });
	if (user1.user_role == 1) {
		if (req.body.password) {
			req.body.password = CryptoJS.AES.encrypt(
				req.body.password,
				process.env.SECRET_KEY
			).toString();
		}

		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedUser);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		if (user1.id == req.params.id) {
			if (req.body.password) {
				req.body.password = CryptoJS.AES.encrypt(
					req.body.password,
					process.env.SECRET_KEY
				).toString();
			}

			try {
				const updatedUser = await User.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body,
					},
					{ new: true }
				);
				res.status(200).json(updatedUser);
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.json("You are not authorized.");
		}
	}
});

router.delete("/logout", verifyToken2, async (req, res) => {
	//refresh_tokens_list = refresh_tokens_list.filter(token => token !== req.body.token)
	const user1 = await User.findOne({ _id: req.user.id });
	user1.token = "";
	user1.save();

	res.json(user1.token);
});

//Create appointments
router.post("/createAppointment", verifyToken, async (req, res) => {
	const user1 = await User.findOne({ _id: req.user.id });
	const newApp = new Appointment({
		to_user_id: req.body.to_user_id,
		from_user_id: req.user.id,
		service_id: req.body.service_id,
		date: req.body.date,
		alternate_date: req.body.alternate_date,
	});
	if (user1.user_role == 1 || user1.user_role == 3) {
		res.json("You are not authorized");
	} else {
		const to_user = await User.findOne({ _id: req.body.to_user_id });
		if (to_user.user_role != 3) {
			res.json("Seller does not exist.");
		} else {
			try {
				const savedApp = await newApp.save();
				res.status(201).json("Appointment Created");
			} catch (err) {
				res.status(500).json(err);
			}
		}
	}
});

//get appointments
router.get("/getApp", verifyToken, async (req, res) => {
	const user1 = await User.findOne({ _id: req.user.id });
	if (user1.user_role == 1) {
		const all_app = await Appointment.find();
		res.json(all_app);
	} else if (user1.user_role == 2) {
		const from_user = await Appointment.find({ from_user_id: req.user.id });
		res.json(from_user);
	} else if (user1.user_role == 3) {
		const to_user = await Appointment.find({ to_user_id: req.user.id });
		res.json(to_user);
	}
});
//update appointment
router.put("/updateApp/:id", verifyToken, async (req, res) => {
	//appointment id
	const user_app = await Appointment.findOne({ _id: req.params.id });
	//const user_app = await Appointment.find({_id:req.params.id})
	const user1 = await User.findOne({ _id: req.user.id });
	console.log(user_app);
	console.log(user1);
	if (!user_app) {
		res.json("Invalid Appointment");
	} else {
		if (user1.user_role == 1) {
			res.json("You are not authorized");
		} else if (user1.user_role == 2) {
			if (user_app.from_user_id != req.user.id) {
				console.log("1");
				console.log(user_app.from_user_id);
				console.log(req.user.id);
				res.json("You are not authorized.");
			} else {
				if (!req.body.status) {
					console.log("2");
					res.json("You are not authorized");
				} else {
					if (req.body.status != "Cancelled") {
						console.log("3");
						res.json("You are not authorized");
					} else if (req.body.status == "Cancelled") {
						const updatedApp = await Appointment.findByIdAndUpdate(
							req.params.id,
							{
								$set: req.body,
							},
							{ new: true }
						);
						res.status(200).json(updatedApp);
					}
				}
			}
		} else if (user1.user_role == 3) {
			if (user_app.to_user_id != req.user.id) {
				console.log("1");
				res.json("You are not authorized.");
			} else if (user_app.to_user_id == req.user.id) {
				if (!req.body.status) {
					console.log("2");
					res.json("You are not authorized");
				} else {
					if (
						user_app.status == "Pending" &&
						(req.body.status == "Approved" || req.body.status == "Rejected")
					) {
						const updatedApp = await Appointment.findByIdAndUpdate(
							req.params.id,
							{
								$set: req.body,
							},
							{ new: true }
						);
						res.status(200).json(updatedApp);
					} else if (
						user_app.status == "Approved" &&
						(req.body.status == "Cancelled" || req.body.status == "Completed")
					) {
						const updatedApp = await Appointment.findByIdAndUpdate(
							req.params.id,
							{
								$set: req.body,
							},
							{ new: true }
						);
						res.status(200).json(updatedApp);
					} else {
						res.json("Invalid Update Status");
					}
				}
			}
		}
	}
});
router.post("/report", verifyToken, async (req, res) => {
	const user = await User.findOne({ _id: req.user.id });
	const newReport = await new Reports({
		from_user_id: user._id,
		to_user_id: req.body.to_user_id,
		description: req.body.description,
	});
	if (newReport.from_user_id != newReport.to_user_id) {
		if (user.user_role != 1) {
			try {
				const savedReport = await newReport.save();
				res.status(201).json(savedReport);
			} catch (err) {
				res.status(500).json({ status: 500, message: err });
			}
		} else {
			res.status(403).json({
				status: 403,
				message: "You are not permitted to report other users.",
			});
		}
	} else {
		res.status(403).json({
			status: 403,
			message: "You are not permitted to report yourself.",
		});
	}
});

router.put("/updateReport/:id", verifyToken, async (req, res) => {
	const user1 = await User.findOne({ _id: req.user.id });
	const id = req.params.id;
	const report = await Reports.findOne({ _id: req.params.id });

	if (user1.user_role == 1) {
		if (!req.body.report_status) {
			res.json("You are not authorized to change the details of report.");
		} else {
			if (
				report.report_status == "Pending" &&
				(req.body.report_status == "Approved" ||
					req.body.report_status == "Rejected")
			) {
				const updatedReport = await Reports.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body,
					},
					{ new: true }
				);
				res.status(200).json(updatedReport);
			} else {
				res.json("Invalid status update.");
			}
		}
		w;
	} else {
		res.status(403).json({
			status: 403,
			message: "You are not permitted to update reports for other users.",
		});
	}
});

router.get("/getPendingReports", verifyToken, async (req, res) => {
	const user = await User.findOne({ _id: req.user.id });
	if (user.user_role == 1) {
		const pending_reports = await Reports.find({ report_status: "Pending" });
		res.status(201).send(pending_reports);
	} else {
		res.status(403).json({
			status: 403,
			message: "Not permitted.",
		});
	}
});
router.get("/approvedreports", verifyToken, async (req, res) => {
	const user = await User.findOne({ _id: req.user.id });
	if (user.user_role == 1) {
		const approved_reports = await Reports.find({ report_status: "Approved" });
		res.status(201).send(approved_reports);
	} else {
		res.status(403).json({
			status: 403,
			message: "Not permitted.",
		});
	}
});
router.get("/rejectedreports", verifyToken, async (req, res) => {
	const user = await User.findOne({ _id: req.user.id });
	if (user.user_role == 1) {
		const rejected_reports = await Reports.find({ report_status: "Rejected" });
		res.status(201).send(rejected_reports);
	} else {
		res.status(403).json({
			status: 403,
			message: "Not permitted.",
		});
	}
});

router.get("/Categories", async (req, res) => {
	const categories = await Service.find({ category: { $ne: null } });
	let arrc = [];
	categories.forEach((element) => {
		if (arrc.includes(element.category)) {
			return;
		} else {
			arrc.push(element.category);
		}
	});
	res.json(arrc);
});

router.get("/getServices", async (req, res) => {
	const serv = await Service.aggregate([
		{ $match: { approve_status: "Approved" } },
		{
			$group: {
				_id: "$category",
				num_services: { $sum: 1 },
				services: { $addToSet: "$$ROOT" },
			},
		},
	]);

	res.json(serv);
});

router.get("/AdminServices", verifyToken, async (req, res) => {
	const user1 = await User.findOne({ _id: req.user.id });
	// if (!req?.query?.id) {
	//user

	if (user1.user_role == 1) {
		const all_services = await Service.find();
		//{ approve_status: "Pending" }
		//);
		res.json(all_services);
	} else {
		res.json("You are not authorized to do that");
	}
	// }
	// //get services of specified user
	// else {
	// 	console.log(req.query.id);
	// 	const user_service = await Service.find({ user_id: req.query.id });
	// 	res.json(user_service);
	// 	if (!user_service) {
	// 		res.json("Seller does not exist.");
	// 	}
	// }
});
function GetSortOrder(prop) {
	return function (a, b) {
		if (a[prop] > b[prop]) {
			return 1;
		} else if (a[prop] < b[prop]) {
			return -1;
		}
		return 0;
	};
}
router.get("/getTopServiceProviders", async (req, res) => {
	const all_services = await Service.aggregate([
		{ $project: { avg_rating: { $avg: "$ratings" } } },
	]);

	var services = [];
	for (let index = 0; index < all_services.length; index++) {
		const element = all_services[index]["avg_rating"];
		if (element > 4) {
			services.push(all_services[index]);
		}
	}
	res.json(services);
});

module.exports = router;
