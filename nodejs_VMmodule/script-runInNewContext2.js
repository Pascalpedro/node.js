// Node.js program to demonstrate the script.runInNewContext() method

// Including util and vm module
const util = require('util');
const vm = require('vm');

// Creating contexts
cont = {
      animal: 'dog',
      total_number: 5
	};

// Creating script with its parameters
var script = vm.createScript(
    'total_number += 5; name = "Sheru"', 'file.vm');

// Calling runInNewContext method
script.runInNewContext(cont);

// Displays output
console.log(cont);
