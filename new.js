const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

// Middleware to parse JSON data
app.use(express.json());


// URL Connection
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database name
const dbName = "testdb";


async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully DB Server");
    const db = client.db(dbName);
    const collection = db.collection('notes');
  
    await collection.insertOne({
        title: "Hello",
        content: "How are you",
    })
    console.log("Document inserted successfully");
  
    return 'done.';
  }

  
    

  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());






app.listen(() => {

  console.log("http://localhost:4042");
});
