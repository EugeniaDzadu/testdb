const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Instantiate the Schema class and pass in 
// your document structure as an argument to the schema class
const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Firstname is required"]
    }, 
    lastname: {
        type: String,
        required: [true, "Lastname is required"]
    }
})

// Create a mongoose model with the preffered name of
//  your collection and the UserSchema created above
const UserModel = mongoose.model("user", UserSchema)
// The String "user" is the collection name

// Export the model
module.exports = UserModel