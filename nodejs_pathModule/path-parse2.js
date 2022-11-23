// Node.js program to demonstrate the path.parse() method

// Import the path module
const path = require('path');

path1 = path.parse("C:\\users\\admin\\website\\index.html");
console.log(path1);

path2 = path.parse("website\\style.css");
console.log(path2);
