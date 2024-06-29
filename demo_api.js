const http = require('http');
const jsonobject = require('./data_api.js');
http.createServer((req,res)=>{
    res.writeHead(200, {'content-Type':'application\json'});
    
    res.write(JSON.stringify(jsonobject));
    res.end();

}).listen(3000);