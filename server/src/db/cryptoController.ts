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


export const getCryptoById = async (id: string) => {
    try {
        const singleCrypto = await CryptoModel.findById(id)
    } catch (error) {
        
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


export const deleteCryptoById = async (id: string) => {
    try {
        await CryptoModel.findOneAndDelete({_id: id})
    } catch (error) {
        
    }
}

export const updateCryptoById = async (id: string, values: Record<string, any>) => {
    try {
        await CryptoModel.findByIdAndUpdate(id, values)
    } catch (error) {
        console.log(error)
    }
}