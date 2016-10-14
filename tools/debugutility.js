// Requires the Node File System module
const fs = require('fs');

exports.debug = (message) => {
	fs.appendFile('./logs/debug.log', message);
}