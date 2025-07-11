import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
import dotenv from "dotenv"


dotenv.config({path: "./.env"})



const app = express()

app.use(cors({
    credentials: true
}))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)


const port = process.env.SERVER_PORT || 6000;


server.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}...`)
})


const MONGO_URL = "mongodb+srv://MichalBielawski:<PASSWORD>@cluster0.jlrmvqf.mongodb.net/cryptoDB?retryWrites=truenpm"
    .replace("<PASSWORD>", process.env.MONGO_PASSWORD)




