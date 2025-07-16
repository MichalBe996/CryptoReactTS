import express from "express";
import { getAllCrypto, createCrypto } from "./cryptoController";



export const cryptoRouter = express.Router()


cryptoRouter.route("/")
    .post(createCrypto)
    .get(getAllCrypto)

