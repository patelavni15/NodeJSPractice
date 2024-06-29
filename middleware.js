const express = require('express');
const reqFilter = require('./middleware');
const app = express();

/* const reqFilter = (req,res,next)=>{
    //console.log('reqFilter');
    if(!req.query.age)
        {
            res.send("Please Provide Age");
        }
        else if (req.query.age<18)
            {
                res.send("you can not access");
            }
        else
        {
            next();
        }
    
} */
//app.use(reqFilter);

app.get('/', (req,res)=>{

    res.send("welcome to home page");

});
app.get('/login', (req,res)=>{

    res.send("welcome to login page");

});
app.get('/user', reqFilter,(req,res)=>{

    res.send("welcome to user page");

});
app.get('/about', reqFilter,(req,res)=>{

    res.send("welcome to About page");

});
app.listen(5000);