// Require and instantiate express
var express = require('express');
var app = express();

app.get('/', function(req, res){
	// Route for the homepage
	res.json({ "server": "online" });
});

app.post('/api/shortening', function(req, res){
	// Route to create and return the shortened URL
	
});

var server = app.listen(3000, function(){
	console.log('Server online at port 3000');
});