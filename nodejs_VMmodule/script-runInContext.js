// Node.js program to demonstrate the script.runInContext() method

// Including util and vm module
const util = require('util');
const vm = require('vm');

// Constructing context
const contextobj = {
  name: 'Nidhi',
  articles: 60
};

// Constructing script
const script = new vm.Script('articles *= 10;');

// Contextifying object
 vm.createContext(contextobj);

// Calling runInContext method
script.runInContext(contextobj);

// Displays output
console.log(contextobj);
			  
