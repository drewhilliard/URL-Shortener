// Require and instantiate express
var express = require('express');
var app = express();

// Require body-parser
var body_parser = require('body-parser');

// Require the router file containing all routes
var routes = require('./routes/router')(app);



var server = app.listen(3000, function(){
	console.log('Server online at port 3000');
});