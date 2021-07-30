const {
	createOrderController,
	getOrderController,

	updateOrderController,
	deleteOrderController
} = require('./api/controllers/orderController');
const { productController } = require('./api/controllers/productController');
const { userController } = require('./api/controllers/userController');

const route = require('express').Router();
route.post('/user', userController);
route.post('/product', productController);
route.post('/post/order', createOrderController);
route.get('/get/order', getOrderController);
route.patch('/patch/order', updateOrderController);
route.delete('/delete/order', deleteOrderController);

module.exports = route;
