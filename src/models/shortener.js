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

// Display a URL based on id
exports.find = (payload, err, success) => {
	db.urls.find({
		where: (
			{ id: payload }
		)
	}).then(success).catch(err);
}

// WORK IN PROGRESS
// Update a URL based on id
exports.update = (payload, err, success) => {
	db.urls.find({
		where: (
			{ id: payload }
		)	
	}).then((currentData) => {
		currentData.updateAttributes(payload).then(success).catch(err);
	}).catch(err);
}

// Delete URL based on id
exports.destroy = (payload, err, success) => {
	db.urls.destroy({
		where: {
			id: payload
		}
	}).then((currentData) => {
		currentData.updateAttributes(payload).then(success).catch(err);
	}).catch(err);
}