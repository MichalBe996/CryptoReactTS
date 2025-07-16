import express from "express";
import { getAllCrypto, createCrypto } from "./cryptoController";


const cryptoRouter = express.Router()


cryptoRouter.route("/")
    .get(getAllCrypto)
    .post(createCrypto)




export default cryptoRouter;