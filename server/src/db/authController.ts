import { Request, Response, NextFunction } from "express";
import { UserModel } from "./userModel";



export const registerUser = async(req: Request, res: Response) => {
    const {name, email, password} = req.body;
    try {
        const newUser = new UserModel({name, email, password})
        await newUser.save()
        res.status(201).json({
            status: "Success",
            message: "User registered successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error

        })
        
    }

}

export const loginUser = async(req: Request, res: Response) => {
    const {email, password} = req.body
    try {
        const user = await UserModel.findOne({email})
        if(!user){
            res.status(400).json({
                status: "Fail",
                message: "Wrong email or password, try again"
            })
           
        }else {
            res.status(200).json({
            status: "Success",
            message: "User found"
        })
        }
       

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error
            
        })
    }
}