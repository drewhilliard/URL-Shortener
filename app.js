// Require and instantiate express
var express = require('express');

// Require body-parser
var body_parser = require('body-parser');

// Instantiate express
var app = express();

// Route for the homepage
app.get('/', function(req, res){
	res.json({ "server": "online" });
});

app.post('/api/v1/shortening/:url', function(req, res){
	// Imports the URL shortener module
	var shorten = require("./modules/shortening.js");

	// Calls the shortenUrl function in the shortener module
	output = shorten.shortenUrl();

	// Responds with the original input and the new short URL in JSON
	res.json({"longurl": req.params.url, "shorturl": output});
});

var server = app.listen(3000, function(){
	console.log('Server online at port 3000');
});