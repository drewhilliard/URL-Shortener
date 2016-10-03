// Require and instantiate express
const express = require('express');
const app = express();

// Require body-parser
const body_parser = require('body-parser');

// Require the router file containing all routes
var routes = require('./routes/router')(app);

// Run server on port 3000
const server = app.listen(3000, function(){
	console.log('Server online at port 3000');
});