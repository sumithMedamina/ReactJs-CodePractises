var express =require("express");
var cors =require("cors");
const { subscribe } = require("diagnostics_channel");
var mongoClient =require("mongodb").MongoClient;


var dbConnectionUrl = "mongodb+srv://msk274651:T6cEFMPNu7Tc4BjK@mangoclient.oqejmkn.mongodb.net/";

var app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// get all videos
app.get("/videos", (req, res)=>{
    mongoClient.connect(dbConnectionUrl)
    .then((databaseObj) =>{
       var database = databaseObj.db("tutorial");
       database.collection("videolibrary").find({}).toArray().then((documents)=>{
        res.send(documents);
        res.end();
       })
    })
    .catch(err =>{
        console.log(err);
    })
})

//get video by id
app.get("/video/:id" ,(req, res)=>{
    var video_id = parseInt(req.params.id);
    mongoClient.connect(dbConnectionUrl)
    .then((databaseObj) =>{
        var database = databaseObj.db("tutorial");
        database.collection("videolibrary").find({id:video_id}).toArray().then((document)=>{
            res.send(document);
            res.end();
        })
    }).catch(err =>{
        console.log(err);
    })
})

//adding new  video
app.post("/addvideo",(req, res)=>{
    var newRecord ={
        id : parseInt(req.body.id),
        title : req.body.title,
        url: req.body.url,
        views :parseInt( req.body.views),
        likes :parseInt( req.body.likes),
        subscribed : (req.body.subscribed==="true")?true:false
    }

    mongoClient.connect(dbConnectionUrl)
    .then((databaseObj)=>{
        var database =databaseObj.db("tutorial");
        database.collection("videolibrary").insertOne(newRecord).then(result =>{
            console.log("New Record Inserted");
            res.redirect("/videos");
            res.end();
        })
    })
    .catch(err => {
        console.log(err);
    })
})

//update existing video details with id
app.put("/updatevideo/:id", (req, res)=>{
        var updatedDetailsOfVideo = {
            id : parseInt(req.body.id),
            title : req.body.title,
            url: req.body.url,
            views :parseInt( req.body.views),
            likes :parseInt( req.body.likes),
            subscribed : (req.body.subscribed==="true")?true:false
        }

        var video_id = parseInt(req.param.id);

        mongoClient.connect(dbConnectionUrl)
        .then((databaseObj) => {
            var database = databaseObj.db("tutorial");
            database.collection("videolibrary").findOneAndUpdate({id:video_id},{$set:{updatedDetailsOfVideo}}).then(result =>{
                console.log(result);
                console.log("Result Updated");
                res.end();
            })
        })
        .catch(err =>{
            console.log(err);
        })
})

//Delete video Details by id
app.delete("/deletevideo/:id", (req,res) =>{
            var video_id = parseInt(req.param.id);

            mongoClient.connect(dbConnectionUrl)
            .then(databaseObj =>{
                var database = databaseObj.db("tutorial");
                database.collection("videolibrary").find({id:video_id}).deleteOne().then(result =>{
                    console.log("Record Deleted");
                    console.log(result);
                    res.end();
                })
            })
            .catch((err) => {
                console.log(err);
            })

})

app.listen(5050);
console.log("server started in port number 5050");
