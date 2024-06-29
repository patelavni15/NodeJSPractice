const dbconnect = require('./dbconnection');

const insert = async ()=>{

   const db = await dbconnect();
   const result = await db.insertOne({
        pro_name:'Note 3', brand:'Vivo', price:345, category:'Mobile'
    });
    console.log(result);
    console.log("data inserted");
}
insert();

