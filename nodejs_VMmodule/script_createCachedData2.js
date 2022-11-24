// Node.js program to demonstrate the script.createCachedData() method

// Including vm module
const vm = require("vm");

// Constructing script and defining a function add inside it
const script = new vm.Script(`

function add(a, b) {
  return a + b;
}

const x = add(1, 2);
`);

// Calling runInThisContext method
script.runInThisContext();

// Calling createCachedData with caching the variable x used above
const cacheWithx = script.createCachedData();
console.log(cacheWithx);
