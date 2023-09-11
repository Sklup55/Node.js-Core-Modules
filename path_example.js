// Import the 'path' module
const path = require('path');

// Define path segments
const segments = ['home', 'user', 'documents', 'file.txt'];

// Join path segments into a single path
const fullPath = path.join(...segments);

// Log the full path
console.log('Full Path:', fullPath);
