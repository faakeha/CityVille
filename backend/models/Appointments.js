const User = require("../models/Users")
const Service = require("../models/Services")

const mongoose = require("mongoose")
const appointmentsSchema = new mongoose.Schema({
	to_user_id:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users' 
    },
    from_user_id:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users' 
    },    
	service_id:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'services'
    },
	approve_status:{
        type: String,
		enum: ['Pending', 'Approved', 'Rejected', 'Completed', 'Cancelled'],
		default: 'Pending'
    },
    date:{
        type: Date,
        required: true
    },
    alternate_date:{
        type: Date,
        required: false
    }
    
},
    {
	timestamps:true
    })
    
module.exports = mongoose.model('Appointments', appointmentsSchema)    