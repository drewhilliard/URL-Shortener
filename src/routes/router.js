const urls = require('../models/shortener');
const create = require('../models/shortener');
const findAll = require('../models/shortener');

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
		const shorten = require("../models/shortener.js");

		// Calls the shortenUrl function in the shortener module
		output = shorten.shortenUrl();

		// Responds with the original input and the new short URL in JSON
		res.json({"longurl": req.params.url, "shorturl": output});

		// Write to DB logic here...

	});

	// Route to display all URLS
	app.get('/api/v1/urls', (req, res) => {
		urls.findAll((err) => {
			res.status(500).json(err);
		}, (data) => {
			res.json(data);
		});
	});
	
}