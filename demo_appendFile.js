var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello Content append!', function(err){
    if (err) throw err;
    console.log('saved!');
});