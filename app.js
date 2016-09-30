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
	var shorten = require("./modules/shortening.js");

	output = shorten.shortenUrl();

	res.json({"longurl": req.params.url, "shorturl": output});
});

var server = app.listen(3000, function(){
	console.log('Server online at port 3000');
});