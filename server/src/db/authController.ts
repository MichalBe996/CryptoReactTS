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