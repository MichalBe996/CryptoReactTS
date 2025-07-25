import mongoose from "mongoose";




const CryptoSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    symbol: {type: String, required: true, unique: true},
    price: {type: Number, required: true},
    percent1H: {type: Number, required: true},
    percent24H: {type: Number, required: true}

})


export const CryptoModel = mongoose.model("Crypto", CryptoSchema)