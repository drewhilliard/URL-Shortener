const urls = require('../models/shortener');

// Require debug utility
const utility = require('debug-tool-dh');

module.exports = (express) => {
  const router = express.Router();

// Route for the homepage
  router.get('/', (req, res) => {
    res.json({ API: 'online' });
  });

// Route for /about page
  router.get('/about', (req, res) => {
    res.redirect('https://github.com/drewhilliard/URL-Shortener');
  });

// Route to shorten a URL and write it to the database (primary function of application)
  router.post('/api/v1/url', (req, res) => {
// Imports the URL shortener module
    const shorten = require('../models/shortener.js');

// Calls the shortenUrl function in the shortener module
    const output = shorten.shortenUrl();

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
      utility.debug('All URLs retrieved and returned.');
    });
  });

// Route to display a specific URL based on id
  router.get('/api/v1/url/:id', (req, res) => {
    urls.find(req.params.id, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
      utility.debug('URL with id of ' + req.params.id + ' requested, retrieved and returned.');
    });
  });

// Route to update a specific URL based on id
  router.post('/api/v1/url/:id', (req, res) => {
    urls.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
      utility.debug('URL with id of ' + req.params.id + ' updated per POST request.');
    });
  });

// Route to delete specific URL based on id
  router.delete('/api/v1/url/:id', (req, res) => {
    urls.destroy(req.params.id, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.json(data);
      utility.debug('URL with id of ' + req.params.id + ' was deleted.');
    });
  });

// Route to redirect from short URL to original long URL
  router.get('/go/:id', (req, res) => {
    urls.find(req.params.id, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.redirect(data.longUrl);
      utility.debug('Redirect to URL with id of ' + req.params.id + ' initiated.');
    });
  });

  return router;
};
