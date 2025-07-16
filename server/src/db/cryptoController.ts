import { CryptoModel } from "./cryptoModel"


export const getAllCrypto = async () => {
    
    try {
        const allCrypto = await CryptoModel.find()
    } catch (error) {
        console.log(error)
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


export const createCrypto = async (values: Record<string, any>) => {

    try {
      await new CryptoModel(values).save().then((user)=> user.toObject())
    } catch (error) {
        console.log(error)
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