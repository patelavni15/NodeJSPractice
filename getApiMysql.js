const express = require('express');
const con = require('./demo_db_connection');
const app = express();


app.get('/', (req, res)=>{
    con.query("select * from user", (err,result)=>{
        if(err){
            res.send("error");
        }
        else{
            res.send(result);
        }
    })
    

});
app.use(express.json()); // send data from postman

/* app.post('/', (req,res)=>{
    const data={Uid:"10", Name: "Seeta", Phone: "9856147859", Email:"seeta@test.com", address:"Goa"};
    con.query('INSERT INTO User SET ?', data, (error, result, feilds)=>{
        if(error) throw error;
        res.send(result);

    })
}) */
app.post('/', (req,res)=>{
    const data=req.body; // send data from postman
    con.query('INSERT INTO User SET ?', data, (error, result, feilds)=>{
        if(error) throw error;
        res.send(result);

    })
});

/* app.put('/', (req,res)=>{
    const data = ["Sweety", '8547859658', "Delhi", 6];
    con.query("UPDATE User SET Name = ?, Phone=?, address=? where Uid= ?", data, (error, result, fields)=>{
            if(error) throw error;
            res.send(result);

    })
   // res.send("updated api");
}); */

app.put('/:Uid', (req,res)=>{
    const data = [req.body.Name,req.body.Phone,req.body.address,req.params.Uid];
    con.query("UPDATE User SET Name = ?, Phone=?, address=? where Uid= ?", data, (error, result, fields)=>{
            if(error) throw error;
            res.send(result);

    })
   // res.send("updated api");
});

app.delete('/:Uid', (req,res)=>{
    
    con.query("DELETE FROM User WHERE Uid = "+req.params.Uid, (error, result)=>{
        if(error) throw error;
        res.send(result)
        })
});

app.listen(5000);