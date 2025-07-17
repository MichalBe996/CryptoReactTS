import mongoose from "mongoose";
import validator from "validator"
import bcrypt from "bcryptjs"



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

    },
    password: {
        type: String,
        required: [true, "User must provide password"],
        select: false
    }
})


UserSchema.pre("save", async function(next){
    if(!this.isModified("password")){return next()}
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

export const UserModel = mongoose.model("User", UserSchema)