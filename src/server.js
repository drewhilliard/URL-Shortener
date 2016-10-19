// Require and instantiate express
const express = require('express');

// Require body-parser
const bodyParser = require('body-parser');

// Require debug utility
const utility = require('debug-tool-dh');

// Instantiate express
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require the router file containing all routes
app.use('/', require('./routes/router')(express));

// Run server on port 3000
const server = app.listen(3000, () => {
  utility.debug('Server online at port 3000');
});

module.exports = server;
