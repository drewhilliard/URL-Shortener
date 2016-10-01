# Assignment 1 - Static API
## by Drew Hilliard
This is a static API that accepts a standard URL and returns a shortened, randomly generated, unique URL. 

### Installation
Clone the repository and initialize NPM. This project only has two dependencies currently:
* express 
* body-parser
* mysql
* sequelize

### Endpoint and example response
Currently the only active endpoint is at __/api/v1/shortening/{input}__ where __{input}__ denotes the URL to be shortened. At this time the API only accepts URLs conforming to the following syntax: 
* www.domain.com

Example response in JSON: 
```json
{
  "longurl": "www.google.com",
  "shorturl": "http://dhsu.com/9h4x1za"
}
```