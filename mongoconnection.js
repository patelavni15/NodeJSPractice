const dbconnect= require('./dbconnection')

const main= async ()=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    console.warn(data);
}
main();