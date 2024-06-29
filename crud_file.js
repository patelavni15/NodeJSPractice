const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname);
const filePath = `${dirPath}/apple.txt`;
//fs.writeFileSync(filePath,'This is a simple text file');

/* fs.readFile(filePath,'utf8', (err,item)=>{
    console.log(item)
})
 */
/* fs.appendFile(filePath, 'this is appen statement!', (err)=>{
   if(!err) console.log("file is appeded");
}) */
/* fs.rename(filePath, `${dirPath}/banana.txt`, (err)=>{
    if(!err) console.log("file renamed");
}) */
fs.unlinkSync(`${dirPath}/banana.txt`)