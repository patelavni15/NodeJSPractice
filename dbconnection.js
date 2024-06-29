const {MongoClient}=require('mongodb');
const url= 'mongodb://localhost:27017';
const database= 'ecommerce';
const client = new MongoClient(url);

async function dbconnect(){
    let result= await client.connect();
    db =  result.db(database);
    return db.collection('products');
    /* let response = await collection.find({}).toArray();
    console.log(response); */
}
module.exports = dbconnect;