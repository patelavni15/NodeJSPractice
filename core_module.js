const fs = require('fs');
fs.writeFileSync("file1.txt", 'Welcome to file 1!!')
console.log(__dirname);
console.log("-->>", __dirname);
console.log(__filename);

