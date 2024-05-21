const express = require("express");
const app = express();
express.urlencoded({extended:false})
const { MongoClient } = require("mongodb");


// Middleware to parse JSON data
app.use(express.json());

// URL Connection
const url = "mongodb://localhost:27017";
const client = new MongoClient(url, { useUnifiedTopology: true });

// Database name
const dbName = "testdb";



let collection;

app.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    if (title, content) {
      return res.send("Title and content are required");
    }

    await collection.insertOne({ title, content });
    console.log("Details added!");

    res.send("Note added successfully");
  } catch (error) {
    console.error("Error adding note:", error);
    res.send("Internal Server Error");
  }
});

app.listen(4040, async () => {
  await client.connect();
  const db = client.db(dbName);
  collection = db.collection("notes");
  console.log("Connected successfully DB Server");
  console.log("http://localhost:4040");
});

