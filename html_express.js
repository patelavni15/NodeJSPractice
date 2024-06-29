const express = require('express');
const path = require('path');

const app=express();
const publicPath = path.join(__dirname,'public');
console.log(publicPath);

//app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.get('/profile', (req,res)=>{
    const user={
        name:'avni',
        email:'avni@gmail.com',
        city:'Valsad',
        skills:['php','js','c++', 'java'],
    }
    res.render('profile' , {user});
});



app.get('', (req,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})
app.get('*', (req,res)=>{
    res.sendFile(`${publicPath}/nopage.html`)
})



app.listen(5000);