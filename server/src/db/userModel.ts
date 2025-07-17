import mongoose from "mongoose";
import validator from "validator"



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User must provide a name"]
    },
    email: {
        type: String, 
        required: [true, "User must provide an e-mail adress!"], 
        unique: [true, "The email is already taken"],
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email adress"]

    }
})