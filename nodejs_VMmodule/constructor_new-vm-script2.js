// Node.js program to demonstrate the Constructor: new vm.Script() method

// Including vm and util module
const util = require('util');
const vm = require('vm');

// Creating context
const context = {
  value: 1.0
};

// Calling the constructor
const script = new vm.Script('Type = "Float"; value += 2*0.1;');

// Contextifying object
vm.createContext(context);

// Calling runInContext method
script.runInContext(context);

// Displays output
console.log(context);
