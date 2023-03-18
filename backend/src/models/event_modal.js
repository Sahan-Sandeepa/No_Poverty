const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({eventNo: {type: String,required: true,unique: true,//backend validation
    },

    eventName: {type: String,require: true,},

    eventPlace: {type: String,require: true,},

    eventDetails: {type: String,require: true,},

    eventDate: {type: String,require: true,},

    eventStatus: { type: String, require: true, default: "OPEN"},
});
const event = mongoose.model("event", eventSchema);
module.exports = event; //export...................