// Include 'dns' module and create its object
var dns = require('dns');

// Call to reverse function along with lookup function.
dns.lookup('www.geeksforgeeks.org', 
    function onLookup(err, address, family) {
    console.log('address:', address);
    dns.reverse(address, function (err, hostnames) {
       console.log('reverse for ' + address + ': ' 
             + JSON.stringify(hostnames));
    });  
});

// Execute using $ node <filename>
