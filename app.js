// Require and instantiate express
var express = require('express');
var body_parser = require('body-parser');
var app = express();

app.get('/', function(req, res){
	// Route for the homepage
	res.json({ "server": "online" });
});

app.get('/api/v1/shortening', function(req, res){
	// Route to create and return the shortened URL
	res.send('All good here.');
});

app.post('/api/v1/shortening/:url', function(req, res){
	var input = req.params.url;
	
	// Now that you have the users input, write the shortener and then output it as JSON below

	res.json({"shorturl": "coming soon"});
});

var server = app.listen(3000, function(){
	console.log('Server online at port 3000');
});