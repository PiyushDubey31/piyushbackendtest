const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
	'mongodb+srv://PiyushDubey31:piyushdubey0341@cluster0.khg11.mongodb.net/piyushbackenddb?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, result) => {
		if (result) {
			console.log('database connected successfully');
		}
	}
);
app.use(route);

app.listen(PORT, () => {
	console.log(`the server has been started successfully at port numbe ${PORT}`);
});
