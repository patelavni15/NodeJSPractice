const express = require('express');
const jwt = require('jsonwebtoken');
const { result } = require('lodash');
const app = express();
const secretekey = 'secretekey';

app.get('/', (req,res)=>{
    res.json({
        message: "a simple api"
    })
})

app.post('/login', (req,res)=>{
    const user = {
        name:"Avni",
        email:"avni@test.com",
        id:1
    }
    jwt.sign({user}, secretekey, {expiresIn: '300s'}, (error, token)=>{
        res.json({token})

    })
});

app.post("/profile", verifyToken, (req,res)=>{
    jwt.verify(req.token, secretekey, (err, authData)=>{
        if(err){
            res.send({result:"invalid Token"})
        }
        else 
        {
            res.json({
                message: "Profile accessed",
                authData
            }

            )
        }
    })
    
})
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        next();

    }
    else {
        res.send({
            result: "Token is not valid"
        })
    }
}


app.listen(5000, ()=>{
    console.log("app is running on 5000 port");
});