// Require and instantiate express
var express = require('express');
var app = express();

app.get('/', function(req, res){
	// Route for the homepage
	res.json({ "server": "online" });
});

app.get('/api/v1/shortening', function(req, res){
	// Route to create and return the shortened URL
	res.send('all good here');
});

app.post('/api/v1/shortening', function(req, res){
	res.json({"api":"online"});
});

var server = app.listen(3000, function(){
	console.log('Server online at port 3000');
});