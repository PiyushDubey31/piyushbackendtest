const mongoose = require('mongoose');
const user = new mongoose.Schema({
	id: {
		type: Number,
		unique: true
	},
	name: {
		type: String
	},
	email: {
		type: String,
		unique: true
	},
	phone: {
		type: String,
		unique: true
	}
});
module.exports = mongoose.model('User', user);
