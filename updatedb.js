const dbconnect = require('./dbconnection');

const updateData= async()=>{
let data= await dbconnect();

let result = await data.updateOne( { pro_name:'M 40'}, 
{ $set:  { brand:'vivo'}});
console.warn(result);

}
updateData();