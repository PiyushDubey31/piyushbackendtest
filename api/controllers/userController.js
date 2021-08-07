const User = require('../models/user');
module.exports = {
	userController: async (req, res) => {
		const { id, name, email, phone ,username,password} = req.body;

		const response = new User({
			id: id,
			name: name,
			email: email,
			phone: phone,
			username:username,
			password:password
		});
		response
			.save()
			.then((result) => {
				res.json({ message: 'data saved succesffuly', result });
			})
			.catch((error) => {
				console.log('catch error', error.message);
				res.json({ message: 'derror', err: error.message });
			});
	}
};
