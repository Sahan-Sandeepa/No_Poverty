const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donate = new Schema({
    name: { type: String ,required:true},
    email: { type: String, required: true },
    contact: { type: String, required: true },
    amount: { type: String, required: true },
    total: { type: Number, required: true },
    status: { type: String, required: true },
}

)

module.exports = mongoose.model('Donation', donate)
