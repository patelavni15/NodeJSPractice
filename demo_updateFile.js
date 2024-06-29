var fs = require('fs');
fs.appendFile('mynewfile1.txt', ' text is apped at the end of the content', function(err){
    if (err) throw err;
    console.log('Updated!');
});