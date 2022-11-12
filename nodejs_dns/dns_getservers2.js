// Node.js program to demonstrate thedns.resolveSoa() method

// Accessing dns module
const dns = require('dns');

// Reading IP address of the current host and printing it to the console
res = dns.getServers();

res.forEach(element => { 
   console.log(element); 
});
