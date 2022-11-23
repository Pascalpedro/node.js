// Node.js program to demonstrate the path.parse() method

// Import the path module
const path = require('path');

path1 = path.parse("/users/admin/website/index.html");
console.log(path1);

path2 = path.parse("website/readme.md");
console.log(path2);
