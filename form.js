const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('./models/user');

const app = express();
const connectionUrl = "mongodb://localhost:27017/testdb";

// Use async/await to connect to MongoDB
async function connectDB() {
    try {
        await mongoose.connect(connectionUrl)
        console.log("Connected to MongoDB")
    } catch (err) {
        console.error("Error connecting to MongoDB", err)
        
    }
}

connectDB();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Render the form
app.get("/home", (req, res) => {
    res.render("index");
});

// Handle form submission
app.post("/api/user", async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        console.error(error);
        res.send('Error saving user');
    }
});

// Start the server
const port = 9000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
