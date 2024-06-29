const dbconnect = require('./dbconnection');

const deleteData = async ()=>{
    //console.log("deleted");

    let data = await dbconnect();
    let result = await data.deleteOne({
        pro_name:'Note 5' 
    });
    console.log(result);


}

deleteData();