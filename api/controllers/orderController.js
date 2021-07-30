const Order = require('../models/order');
module.exports = {
	createOrderController: async (req, res) => {
		const { orderId, userId, productId, productPrice, tax, discount, totalAmount } = req.body;
		try {
			const response = await new Order({
				orderId: orderId,
				userId: userId,
				productId: productId,
				productPrice: productPrice,
				tax: tax,
				discount: discount,
				totalAmount: totalAmount
			});
			response
				.save()
				.then((result) => {
					res.json({ message: 'data saved  successfully', result });
				})
				.catch((err) => {
					res.json({ message: 'data could not saved', err: err.name });
				});
		} catch (error) {
			console.log('catch error', error);
		}
	},
	getOrderController: async (req, res) => {
		try {
			const response = await Order.find({});
			res.json({ message: 'response generated successfully', response });
		} catch (error) {
			console.log('catch error', error);
		}
	},
	updateOrderController: async (req, res) => {
		try {
			const response = await Order.updateOne({ orderId: 'or001' }, { tax: 1200 });
			res.json({ message: 'updated successfully', response });
		} catch (error) {
			console.log('catch error', error);
		}
	},
	deleteOrderController: async (req, res) => {
		try {
			const { orderId } = req.body;
			const response = await Order.deleteOne({ orderId }, {});
			res.json({ message: 'order deleted successfully', response });
		} catch (error) {
			console.log('catch error', error);
		}
	}
};
