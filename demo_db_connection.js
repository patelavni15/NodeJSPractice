var mysql = require('mysql');

var con = mysql.createConnection({
    host : "localhost",
    user: "root",
    password:"root",
    database:"test"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
});

/* con.query("select * from User", (err, result)=>{
    console.warn("result",result);
}) */
module.exports=con;
