// Requires the Node File System module
const fs = require('fs');

// Allows timestamping of entries
const timeStamp = new Date();

exports.debug = (message) => {
  if (process.env.DEBUG) {
    fs.appendFile('./logs/debug.log', timeStamp + ' | ' + message + '\n');
  }
};
