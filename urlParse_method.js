var url = require('url');
var adr = 'http://localhost:8085/default.htm?year=2022&month=november';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8085'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2022&month=november'

var qdata = q.query; //returns an object: { year: 2022, month: 'november' }
console.log(qdata.month); //returns 'november'
