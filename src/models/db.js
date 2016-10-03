// Require Sequelize
const Sequelize = require('sequelize');

// Require dotenv (stores DB connection settings)
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
	host: process.env.DB_HOST,
	dialect: process.env.DB_SCHEMA,
	port: process.env.DB_PORT,
	pool: {
		max: 5,
		min: 0,
		idle: 10000,
	},
	logging: false,
});

const url = sequelize.define('url', {
	longUrl: {
		type: Sequelize.STRING,
	},
	shortUrl: {
		type: Sequelize.STRING,
	}
});

sequelize.sync();

exports.sequelize = sequelize;
exports.url = url;

/*

// DB connection test
sequelize
	.authenticate()
	.then(function(err) {
		console.log('Connection has been established successfully.');
	})
	.catch(function (err) {
		console.log('Unable to connect to the database:', err);
	});

*/