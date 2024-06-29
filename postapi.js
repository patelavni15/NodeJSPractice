const express = require('express');
const dbconnect = require('./dbconnection');

const app = express();

app.get('/', async (req,res)=> {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);
    res.send({
        data
    })
})

app.use(express.json());

app.post('/', async(req,res)=>{
    console.log()
    let data = await dbconnect();
    let result = await data.insertOne(req.body)// data sent from postman to node js

    res.send(result);
})
app.listen(5000);