import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cryptoRouter from "./db/cryptoRouter"
import userRouter from "./db/userRouter"
import { Request, Response, NextFunction } from "express"


dotenv.config({path: "./.env"})



const app = express()

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type", "Authorization"]

}))


app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
app.use("/api/v1/data", cryptoRouter)
app.use("/api/v1/users", userRouter)

const server = http.createServer(app)


const port = process.env.SERVER_PORT || 6000;


server.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}...`)
})


const MONGO_URL = "mongodb+srv://MichalBielawski:<PASSWORD>@cluster0.jlrmvqf.mongodb.net/cryptoDB?retryWrites=true"
    .replace("<PASSWORD>", process.env.MONGO_PASSWORD)


mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on("error", (error: Error)=>console.log(error))



