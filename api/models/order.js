const mongoose = require('mongoose');
const order = new mongoose.Schema(
	{
		orderId: {
			type: String,
			unique: true
		},
		userId: {
			type: Number
		},
		productId: {
			type: String
		},
		productPrice: {
			type: Number
		},
		tax: {
			type: Number
		},
		discount: {
			type: Number
		},
		totalAmount: {
			type: Number
		},
		deleteDate: {
			type: Date,
			default: null
		}
	},
	{ timestamps: true }
);
module.exports = mongoose.model('Order', order);
