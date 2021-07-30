const mongoose = require('mongoose');
const product = new mongoose.Schema({
	productId: {
		type: String,
		unique: true
	},
	productName: {
		type: String
	},
	price: {
		type: Number
	}
});
module.exports = mongoose.model('Product', product);
