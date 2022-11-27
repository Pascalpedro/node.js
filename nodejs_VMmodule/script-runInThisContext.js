// Node.js program to demonstrate the script.runInThisContext() method

// Including vm module
const vm = require('vm');

// Defining code
let code = 'console.log("I am an author?");';

// Defining script
let script = new vm.Script(code);

// Calling runInThisContext method
script.runInThisContext();
