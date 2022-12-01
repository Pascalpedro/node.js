// Node.js program to demonstrate the console.countReset() method

// Accessing console module
const console = require('console');     

// Calling console.count() method 
console.count("a");
console.count("b");
console.count("a");
console.count("a");
console.count("a");
console.count("b");

// Resetting counter
console.countReset("a");
console.countReset("b");

console.count("a");
console.count("b");
