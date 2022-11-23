// Node.js program to demonstrate the path.join() Method  

// Import the path module
const path = require('path');

// Joining 2 path-segments
path1 = path.join("users/admin/files", "index.html");
console.log(path1)

// Joining 3 path-segments
path2 = path.join("users", "geeks/website", "index.html");
console.log(path2)

// Joining with zero-length paths
path3 = path.join("users", "", "", "index.html");
console.log(path3)
