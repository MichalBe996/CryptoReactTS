import mongoose from "mongoose";




const CryptoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    symbol: {type: String, required: true},
    price: {type: Number, required: true},
    percent1H: {type: Number, required: true},
    percent24H: {type: Number, required: true}

})