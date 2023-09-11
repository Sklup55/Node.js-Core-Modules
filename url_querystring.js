// Import the 'url' module
const url = require('url');
// Import the 'querystring' module
const querystring = require('querystring');

// Define a URL string
const urlString = 'https://www.example.com/search?q=nodejs';

// Parse the URL
const parsedUrl = url.parse(urlString, true);

// Log the 'q' parameter from the parsed URL
console.log('Parsed URL Query Parameter (q):', parsedUrl.query.q);

// Define a query string
const queryString = 'q=nodejs&lang=en';

// Parse the query string
const parsedQueryString = querystring.parse(queryString);

// Log the parsed query object
console.log('Parsed Query String:', parsedQueryString);
