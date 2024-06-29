var url = require('url');
var adr = 'http://localhost:8000/mywebpage.htm?year=2017&month=february&name=Avni';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(q.query);
console.log(qdata.month);
console.log(qdata.name);
console.log(qdata.year);

