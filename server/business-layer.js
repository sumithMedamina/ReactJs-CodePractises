
var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;


var app = express();

app.get("/connect",(req,res) => {
    mongoClient.connect("mongodb://localhost:27017/")
    .then(() =>{
        res.send("<h1>Connected with Mongodb successfully</h1>");
    })
    .catch(err =>{
        res.send(err); 
    })
})

app.get("/customers",(req,res)=>{
    res.send([{Name:"sumith",Age:26},{Name:"kiran",Age:28}]);
})

app.get("/details/:id/:name",(req,res)=>{
    res.send(`
        ID :${req.params.id} </br>
        Name :${req.params.name}
        `)
})
app.listen(5000);

