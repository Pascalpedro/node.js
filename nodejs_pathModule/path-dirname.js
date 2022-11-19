// Node.js program to demonstrate the path.dirname() method 

// Import the path module
const path = require('path');

// Complete file path
path1 = path.dirname("/users/admin/website/index.html");
console.log(path1)

// Only file name returns a period (.)
path2 = path.dirname("readme.md");
console.log(path2)

// Path with file not specified
path3 = path.dirname("website/post/comments")
console.log(path3);
