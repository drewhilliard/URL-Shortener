const body_parser = require('body-parser');
const urls = require('../models/shortener');

module.exports = (express) => {

	const router = express.Router();
	
	// Route for the homepage
	router.get('/', function(req, res){
		res.json({ "api": "online" });
	});

	// Route for /about page
	router.get('/about', function(req, res){
		res.redirect('https://github.com/drewhilliard/URL-Shortener');
	});

	// Route to shorten a URL and write it to the database (primary function of application)
	router.post('/api/v1/url', (req, res) => {
	
		// Imports the URL shortener module
		const shorten = require("../models/shortener.js");

		// Calls the shortenUrl function in the shortener module
		output = shorten.shortenUrl();

		// Write to DB logic here...
		urls.create({ longUrl: req.body.url, shortUrl: output }, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.json(data);
		});	
	
	});

	// Route to display all URLs
	router.get('/api/v1/urls', (req, res) => {
		urls.findAll((err) => {
			res.status(500).json(err);
		}, (data) => {
			res.json(data);
		});
	});

	// Route to display a specific URL based on id
	router.get('/api/v1/url/:id', (req, res) => {
		urls.find(req.params.id, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.json(data);
		});
	});

	// Route to update a specific URL based on id
	router.post('/api/v1/url/:id', (req, res) => {

		urls.update(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.json(data);
		});
	});

	// Route to delete specific URL based on id
	router.delete('/api/v1/url/:id', (req, res) => {
		urls.destroy(req.params.id, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.json(data);
		});
	});

	// Route to redirect from short URL to original long URL
	router.get('/go/:id', (req, res) => {
		urls.find(req.params.id, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.redirect(data.longUrl);
		});
	});

	return router;

}