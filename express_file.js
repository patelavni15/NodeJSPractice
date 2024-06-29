const express = require('express');
const app = express();

app.get('', (req,res)=>{
    console.log("Your name is ==>",req.query.name);
    res.send(`<h1>Welcome to Home page</h1> 
        <a href="/about" > Goto About Page</a>`);
});

app.get('/about', (req,res)=>{
    res.send(`<input type="text" placeholder="User Name" value="${req.query.name}"
    />
        <button>Click</button>
        <a href="/" > Goto Home Page</a>
    `);
});
app.get('/contact', (req,res)=>{
    res.send(`<input type="text" palceholder="enter your name" value="${req.query.name}">
                <input type="email" value="${req.query.email}">
                <a href="/person">See Persons</a>
        
        
        `);

});

app.get('/person',(req,res)=>{
    res.send(
        [
           {
            name:'Avni',
            email:'abc@gmail.com'
           } ,
           {
            name:'Kajal',
            email:'xyz@gmail.com'
           } 
        ]
    );
});

app.listen(5000);