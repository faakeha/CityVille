const mongoose = require("mongoose")
const usersSchema = new mongoose.Schema({
	first_name:{
	  type: String,
	  required: true,
	  trim: true
    },
	last_name:{
	  type: String,
	  required: false,
          trim: true
    },
	email:{
	  type: String,
	  required: true,
	  unique: true
    },
	password:{
	  type: String,
	  required: true
    },
	cnic_number:{
	  type: String,
	  required: true,
	  unique: true
    },
	phone_number:{
	  type: String,
	  required: true
    },
	address:{
	  type: String,
	  required: true
    },
	image:{
		type: String,
		required: false
	},
	user_role:{
		type: Number,
		required: true
	},
	token:{
		type: String
	}
},
    {
	timestamps:true
    })
    
module.exports = mongoose.model('Users', usersSchema)    