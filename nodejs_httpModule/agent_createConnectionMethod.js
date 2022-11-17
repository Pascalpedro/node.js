// Node.js program to demonstrate the agent.createConnection() method 

// Importing http module
const http = require('http');

// Creating new agent
var agent = new http.Agent({});

// Creating new connection
var createConnection = agent.createConnection;
console.log('Connection successfully created...');

// Printing that connection
console.log('Connection: ', createConnection);
