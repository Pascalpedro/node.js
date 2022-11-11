var http = require('http');
 
// Create a server object:
http.createServer(function (req, res) {

   // Write a response to the client
    res.write('GeeksForGeeks');

   // End the response 
    res.end();
	                    
// The server object listens on port 8085
}).listen(8085);
