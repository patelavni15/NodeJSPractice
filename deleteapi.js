const express = require('express');
const dbconnect = require('./dbconnection');
const mongodb = require('mongodb')

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

app.put('/', async(req,res)=>{
    //console.log(req.body);
    let data = await dbconnect();
    let result = data.updateOne(
        {pro_name: 'M 40' }, 
    { $set : { price:100000}});
    res.send({result:"updated"});
})

app.delete('/:id', async (req,res)=>{
    console.log(req.params.id);
    const data= await dbconnect();
    const result= await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})

    res.send(result);
})
app.listen(5000);