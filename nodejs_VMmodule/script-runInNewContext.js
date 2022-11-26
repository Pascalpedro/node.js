// Node.js program to demonstrate the script.runInNewContext() method

// Including util and vm module
const util = require('util');
const vm = require('vm');

// Constructing context
const context = { x: 3, y:4 };

// Constructing a script
const script = new vm.Script('x *=11, y *=4;');


// Calling runInNewContext method
script.runInNewContext(context);

// Displays output
console.log("The output is: ", context);
