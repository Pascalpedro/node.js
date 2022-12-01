// Node.js program to demonstrate the console.countReset() method

// Accessing console module
const console = require('console');

// Calling console.count() methodwith no parameter to count default label
console.count();
console.count("a");
console.count("b");
console.count("a");
console.count("a");
console.count();
console.count();

// Resetting counter
console.countReset();
console.countReset("a");
console.countReset("b");
  
console.count();
console.count("a");
console.count("b");
