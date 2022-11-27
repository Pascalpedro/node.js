// Node.js program to demonstrate the vm.createContext([contextObject[, options]]) method

// Including util and vm module
const util = require('util');
const vm = require('vm');

// Assigning value to the global variable
global.globalVar = 5;

// Defining Context object
const object = { globalVar: 20 };

// Contextifying stated object using createContext method
vm.createContext(object);

// Compiling code
vm.runInContext('globalVar += 2;', object);

// Displays the context
console.log("Context: ", object);

// Displays value of global variable
console.log("Global Variable is ", global.globalVar);
