const Product = require('../models/product');
module.exports = {
	productController: async (req, res) => {
		const { productId, productName, price } = req.body;
		const response = new Product({
			productId: productId,
			productName: productName,
			price: price
		});
		response
			.save()
			.then((result) => {
				res.json({ message: 'data saved successfully', result });
			})
			.catch((error) => {
				res.json({ message: 'error occured', error });
			});
	}
};
