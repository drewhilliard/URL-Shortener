const db = require('./db');

exports.shortenUrl = function() {
	// Creates a random string and concatenates it with a (currently fake) 	domain name to form a (potentially) functioning new URL
	output = "http://dhsu.com/" + Math.random().toString(36).slice(2).substr(0, 7);

	return output;
};