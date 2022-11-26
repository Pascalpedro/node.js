// Node.js program to demonstrate the script.runInContext() method

// Including util and vm module
const util = require('util');
const vm = require('vm');

// Constructing context
const contextobj = { globalVar: 6 };

// Constructing script
const script = new vm.Script('globalVar += 12;');

// Contextifying object
vm.createContext(contextobj);

// Calling for loop
for (let i = 1; i < 4; i++) {

// Calling runInContext method
script.runInContext(contextobj);
}

// Displays output
console.log("The output is: ", contextobj);
