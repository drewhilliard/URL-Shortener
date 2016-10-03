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

		// Write to DB logic here...
		urls.create({ longUrl: req.params.url, shortUrl: output }, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.json(data);
		});

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