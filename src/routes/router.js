module.exports = function(app){
	
	// Route for the homepage
	app.get('/', function(req, res){
		res.json({ "api": "online" });
	});

	// Route for /about page
	app.get('/about', function(req, res){
		res.redirect('https://github.com/drewhilliard/URL-Shortener');
	});

	// Route to shorten a URL and write it to the database (primary function of application)
	app.post('/api/v1/:url', function(req, res){
	
		// Imports the URL shortener module
		var shorten = require("../models/shortener.js");

		// Calls the shortenUrl function in the shortener module
		output = shorten.shortenUrl();

		// Responds with the original input and the new short URL in JSON
		res.json({"longurl": req.params.url, "shorturl": output});

		// Write to DB here?
		
	});
}
