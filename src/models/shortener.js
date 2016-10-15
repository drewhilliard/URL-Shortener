const Sequelize = require('sequelize');
const db = require('./db');

// Require debug utility
const utility = require('../../tools/debugutility');

// Shortens a long URL
exports.shortenUrl = () => {
	output = "http://dhsu.com/" + Math.random().toString(36).slice(2).substr(0, 7);

	return output;
};

// Adds input (payload) to the database
exports.create = (payload, err, success) => {
	db.urls.create(payload).then(success).catch(err);
}

// Display all URLs in DB
exports.findAll = (err, success) => {
  db.urls.findAll().then(success).catch(err);

  utility.debug('GET request for all URLs was received.');
}

// Display a URL based on id
exports.find = (payload, err, success) => {
	db.urls.find({
		where: (
			{ id: payload }
		)
	}).then(success).catch(err);

	utility.debug('GET request for specific URL by id was received.');
}

// Update a URL based on id
exports.update = (payload, err, success) => {
	db.urls.find({
		where: (
			{ id: payload.id }
		)	
	}).then((currentData) => {
		currentData.updateAttributes(payload).then(success).catch(err);
	}).catch(err);

	utility.debug('POST request to update URL by id was received.');
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

	utility.debug('DELETE request to delete URL by id was received.');
}