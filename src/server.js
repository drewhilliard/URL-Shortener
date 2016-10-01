// Require and instantiate express
var express = require('express');

// Require body-parser
var body_parser = require('body-parser');

// Instantiate express
var app = express();

// Require the router file containing all routes
var routes = require('./routes/router')(app);



var server = app.listen(3000, function(){
	console.log('Server online at port 3000');
});