/* var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000) */

var express = require('express')
var app = express();

app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/city', (req, res)=>{
    res.send('City name')
    
})

app.get('/name', (req,res)=>{
    var names= {
        name1 : 'Anil',
        name2:'Amit',
        name3: 'Dharti'
    }
    res.send(names)
})

app.get('/book', (req,res)=>{
    var books = {
        book1 : 'Biology',
        book2 : 'MAths',
        book3 : 'English'
    }
    res.send(books)
})

app.listen(3000, ()=>{
    console.log('Server is live');
})

