const User = require("../models/Users");
const mongoose = require("mongoose");

const reportsSchema = new mongoose.Schema(
	{
		from_user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
			required: true,
		},
		to_user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
			required: true,
		},
		report_status: {
			type: "String",
			enum: ["Pending", "Approved", "Rejected"],
			default: "Pending",
		},
		description: {
			type: "String",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model("Community_Reports", reportsSchema);
