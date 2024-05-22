const express = require('express')
const app = express()
const mongoose = require("mongoose")

// Middleware to parse JSON data
app.use(express.json());

// URL Connection
const connectionUrl = "mongodb://localhost:27017"
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/", (req, res)=>{
    res.send("Hello")
})

app.listen(() => {

    console.log("Connected successfully DB Server");
    console.log("http://localhost:4043");
  });