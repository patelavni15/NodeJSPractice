//const { count } = require('console');
var fs = require('fs');
var rs= fs.createReadStream('./file0.txt');
rs.on('open', function(){
    
    console.log('file is open');
});
