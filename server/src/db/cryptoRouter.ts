import express from "express";
import { getAllCrypto, getCryptoById, deleteCryptoById, createCrypto } from "./cryptoController";


const cryptoRouter = express.Router()


cryptoRouter.route("/")
    .get(getAllCrypto)
    .post(createCrypto)

cryptoRouter.route("/:id")
    .get(getCryptoById)
    .delete(deleteCryptoById)


export default cryptoRouter;