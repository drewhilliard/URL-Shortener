const assert = require('assert');
const model = require('../src/models/shortener.js');

describe('Model', () =>  {
  let testUrl = {
    url: 'http://www.fullsail.edu',
    shortUrl: model.shortenUrl();
  }
});
