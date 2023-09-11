// Import the 'util' module
const util = require('util');
// Import the 'fs' module
const fs = require('fs');

// Convert fs.readFile to a promise-based function
const readFilePromise = util.promisify(fs.readFile);

// Define the file name to read
const fileName = 'file.txt';

// Read the file using promises
readFilePromise(fileName, 'utf8')
  .then(data => {
    // Log file contents
    console.log('File Contents:', data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });
