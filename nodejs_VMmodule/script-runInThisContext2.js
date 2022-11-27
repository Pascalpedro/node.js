// Node.js program to demonstrate the script.runInThisContext() method

// Including vm module
const vm = require('vm');

// Defining x and y
var x = 40; var y = 17;

// Adding x and y
const z = x + y;

// Dwfining code
let code = console.log(z);

// Defining script
let script = new vm.Script(code);

// Calling runInThisContext method
script.runInThisContext();
