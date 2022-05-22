const User = require("../models/Users")

const mongoose = require("mongoose")
const servicesSchema = new mongoose.Schema({
	user_id:{ 
        type:  mongoose.Schema.Types.ObjectId, 
        ref: 'users',
        unique: false
    },
	service_name:{
	  type: String,
	  required: true
    },
	description:{
	  type: String,
	  required: true
    },
	category:{
	  type: String,
	  required: true
    },
	image_url:{
	  type: String,
	  required: true,
    },
	reviews:[{
	  type: String,
	  required: false
    }],
	ratings:[{
	  type: Number,
	  required: false
    }],
	business_address:{
		type: String,
		required: true
	},
	price:{
		type: Number,
		required: true
	},
	approve_status:{
		type: String,
		enum: ['Pending', 'Approved', 'Rejected'],
		default: 'Pending'
		
	},
	is_paused:{
		type: Boolean,
		default: false
	}
},
    {
	timestamps:true
    })
    
module.exports = mongoose.model('Services', servicesSchema)    