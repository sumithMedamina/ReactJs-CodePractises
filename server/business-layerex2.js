var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var connectionString ="mongodb://localhost:27017/";
var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());

app.get("/customers", (req,res)=>{
    mongoClient.connect(connectionString)
    .then(obj =>{
        var database = obj.db("tutorial");
        database.collection("customers").find({}).toArray().then(documents =>{
            res.send(documents);
            res.end();
        })
    })
    .catch(err =>{
        console.log(err);
    })
})

app.post("/register-customer",(req,res)=>{
        var customerDetails ={
            userId : req.body.userId,
            userName : req.body.userName,
            password : req.body.password,
            age : parseInt(req.body.age),
            email : req.body.email,
            mobile : req.body.mobile
        }
        mongoClient.connect(connectionString)
        .then(obj => {
            var database = obj.db("tutorial");
            database.collection("customers").insertOne(customerDetails).then(()=>{
                console.log("record inserted");
                res.redirect("/customers");
                res.end();
            })
        })
})

app.listen(5050);
console.log("server started on port no 5050");