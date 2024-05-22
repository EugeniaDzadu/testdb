const express = require('express')
const app = express()
const mongoose = require("mongoose")
express.urlencoded({extended:true})

// Middleware to parse JSON data
app.use(express.json());

// URL Connection
const connectionUrl = "mongodb://localhost:27017"
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// HTML Route
app.get("/", (req, res)=>{
    res.render("index")
})

//  Import the userModel from the models folderImport
//  the userModel from the models folder
const UserModel = require("./models/user")


// route for collecting and sending data to the DB
app.post("/api/user", (req, res)=>{
})

// Pass req.body as an argument in the route
const SaveUser = new UserModel(req.body)

// userinput save


// Set the view engine to ejs
app.set("view engine", "ejs")


app.get("/", (req, res)=>{
    res.send("Hello")
})

app.listen(() => {

    console.log("Connected successfully DB Server");
    console.log("http://localhost:4043");
  });