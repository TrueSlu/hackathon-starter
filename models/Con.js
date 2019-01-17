const mongoose = require('mongoose');

const conSchema = new mongoose.Schema({
	text: String,
}, { timestamps: true });

const Con = mongoose.model('Con', conSchema);

module.exports = Con;
