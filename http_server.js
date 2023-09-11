// Import the 'http' module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set HTTP status code and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send the response
  res.end('Hello, World!');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
