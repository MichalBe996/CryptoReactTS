import express from "express";
import { getAllCrypto, getCryptoById, deleteCryptoById, createCrypto, updateCryptoById } from "./cryptoController";


const cryptoRouter = express.Router()


cryptoRouter.route("/")
    .get(getAllCrypto)
    .post(createCrypto)

cryptoRouter.route("/:id")
    .get(getCryptoById)
    .delete(deleteCryptoById)
    .put(updateCryptoById)


export default cryptoRouter;