// Node.js program to demonstrate the os.EOL constants

// Allocating os module
const os = require('os');

// Printing os.EOL character(s) by stringifying to JSON otherwise it will simply print as end of line
console.log(JSON.stringify(os.EOL));
