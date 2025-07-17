import { CryptoModel } from "./cryptoModel"
import {Request, Response, NextFunction} from "express"


export const getAllCrypto = async (req: Request, res: Response) => {
    
    try {
        const allCrypto = await CryptoModel.find()
        res.status(200).json({
            status: "Success",
            data: allCrypto
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error

        })
    }
}

export const getCryptoByName = async (name: string) => {
    try {
        const singleCrypto = await CryptoModel.findOne({name})
    } catch (error) {
        
    }
}


export const getCryptoById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const singleCrypto = await CryptoModel.findById(id)
        res.status(200).json({
            status: "Success",
            data: singleCrypto
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error
        })
    }
}


export const createCrypto = async (req: Request, res: Response, values: Record<string, any>) => {

    try {
      const values = req.body
      let newCrypto = await new CryptoModel(values).save().then((user)=> user.toObject())
      res.status(201).json({
        status: "Success",
        data: newCrypto
      })
    } catch (error) {
        res.status(401).json({
            status: "Fail",
            message: error
        })
    }

}


export const deleteCryptoById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await CryptoModel.findByIdAndDelete(id)
        res.status(200).json({
            status: "Success",
            message: "Crypto removed from database successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error
        })
        
    }
}

export const updateCryptoById = async (req: Request, res: Response) => {
    try {
        const crypto = await CryptoModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(201).json({
            status: "Success",
            message: "Entry has been updated succesfully",
            data: crypto
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error
        })
    }
}