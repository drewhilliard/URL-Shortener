const Sequelize = require('sequelize');
const db = require('./db');

exports.shortenUrl = () => {
	output = "http://dhsu.com/" + Math.random().toString(36).slice(2).substr(0, 7);

	return output;
};

exports.create = (payload, err, success) => {
	db.urls.create(payload).then(success).catch(err);
}

// Display all URLs in DB
exports.findAll = (err, success) => {
  db.urls.findAll().then(success).catch(err);
}