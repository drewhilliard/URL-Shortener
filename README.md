# URL Shortener
## by Drew Hilliard
This is an API that accepts a standard URL and returns a shortened, randomly generated, unique URL.

### Installation
Clone the repository and install the following dependencies:
* MySQL
* express
* body-parser
* sequelize
* dotenv

#### Configuration
Create ```.env``` file at root application level to configure a database connection
```
DB_NAME=
DB_USER=
DB_PASS=
DB_HOST=
DB_SCHEMA=
DB_PORT=
```

#### Start up
Start the server with ```node src/server.js```

### Endpoints and example responses

#### POST /api/v1/url
POST URL and receive a shortened version

Send a key/value pair using www-form-urlencoded with the key being ```url``` and the value being a standard URL such as ```https://www.github.com/```

Response:

```json
{
  "id": 1,
  "longUrl": "www.example.com",
  "shortUrl": "http://dhsu.com/lbg26z6",
  "createdAt": "2016-10-03T03:26:15.000Z",
  "updatedAt": "2016-10-05T09:50:54.000Z"
}
```

#### GET /api/v1/urls
Displays all URLs in the database

See above for example response.

#### GET /api/v1/url/:id
Display a specific record based on id

```json
{
  "id": 8,
  "longUrl": "www.gamerswithjobs.com",
  "shortUrl": "http://dhsu.com/pjtp7ms",
  "createdAt": "2016-10-05T09:40:32.000Z",
  "updatedAt": "2016-10-05T09:40:32.000Z"
}
```

#### POST /api/v1/url/:id
Update a specific record based on id

```json
{
  "id": 8,
  "longUrl": "http://www.gamerswithjobs.com",
  "shortUrl": "http://dhsu.com/pjtp7ms",
  "createdAt": "2016-10-05T09:40:32.000Z",
  "updatedAt": "2016-10-05T09:58:52.000Z"
}
```

#### DELETE /api/v1/url/:id
Deletes a specific record based on id

#### /go/:id
Redirects to the original long URL based on short URL id

### Debugging
Enable debugging mode by setting DEBUG to TRUE when starting the server. Example:

```
DEBUG=true node src/server.js
```
