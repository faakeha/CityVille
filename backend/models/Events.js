const mongoose = require("mongoose")
const eventsSchema = new mongoose.Schema({
	event_id:{ 
        type:  mongoose.Schema.Types.ObjectId, 
        ref: 'events',
        unique: false
    },
    event_title:{
	  type: String,
	  required: true,
	  trim: true
    },
      event_subtext:{
        type: String,
        required: true,
        trim: true
      },
      event_image_thumb:{
        type: String,
        required: true,
        trim: true
      },
      event_image_banner:{
        type: String,
        required: true,
        trim: true
      },
      event_date:{
        type: Date,
        required: true,
        trim: true
      },
      event_category:{
        type: String,
        required: true,
        trim: true
      },
      event_detail_text:{
        type: String,
        required: true,
        trim: true
      },
      event_fee:{
        type: Number,
        required: true,
        trim: true
      },
      event_apply_now_url:{
        type: String,
        required: true,
        trim: true
      },
      event_isFeatured:{
        type: Number,
        required: true,
        trim: true,
        default: 0
      },

},
{
timestamps:true
})

module.exports = mongoose.model('Events', eventsSchema)    