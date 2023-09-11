// Import the 'fs' module
const fs = require('fs');

// Define the file name to read
const fileName = 'file.txt';

// Read the file
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    throw err; // Halt execution on error
  }
  // Log file contents
  console.log('File Contents:', data);
});
