// Require and instantiate express
const express = require('express');

// Require body-parser
const body_parser = require('body-parser');

// Instantiate express
const app = express();

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

// Require the router file containing all routes
app.use('/', require('./routes/router')(express));

// Run server on port 3000
const server = app.listen(3000, function(){
	console.log('Server online at port 3000');
});