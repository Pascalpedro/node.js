// Node.js program to demonstrate the path.dirname() method 

// Import the path module
const path = require('path');
 
console.log("File name:", __filename);
path1 = path.dirname(__filename);
console.log(path1);

console.log("Directory name:", __dirname);
path2 = path.dirname(__dirname);
console.log(path2);
