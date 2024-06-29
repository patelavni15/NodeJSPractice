var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'hello content it is replaced by new content!', function (err){
    if (err) throw err;
    console.log('Saved!');
});