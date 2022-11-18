// Node.js program to demostrate the agent.maxSockets method

// Importing http module
const http = require('http');

// Importing agentkeepalive module
const Agent = require('agentkeepalive');

// Creating new agent
const keepAliveAgent = new Agent({});

console.log(keepAliveAgent.maxSockets);

// Options object
const options = {
    host: 'geeksforgeeks.org',
    port: 80,
    path: '/',
    method: 'GET',
    agent: keepAliveAgent,
};

//Requesting via http server module
const req = http.request(options, (res) => {
    // printing statuscode
    console.log("statusCode: ", res.statusCode);
});

req.end();
