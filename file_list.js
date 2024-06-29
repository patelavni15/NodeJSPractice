const fs = require('fs');
//fs.writeFileSync('apple.txt', 'this is fruit');

const path = require('path');

const dirPath = path.join(__dirname, 'files');
//console.log(dirPath);
/* for(i=0;i<5;i++)
    {
        fs.writeFileSync('filename.txt', 'new file is created!');
    } */
 /* for(i=0;i<5;i++)
    {
        fs.writeFileSync(dirPath+"/file"+i+".txt", 'new file is created!');
       // fs.writeFileSync(`file${i}.txt`, "a simple file is created");
    }  */

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is ", item);
    })
})