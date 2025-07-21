import { Request, Response, NextFunction } from "express";
import { UserModel } from "./userModel";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



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
    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({email}).select("+password")
        if(!user){
            res.status(400).json({
                status: "Fail",
                message: "Wrong email or password, try again"
            })
           
        }
        const isMatching = bcrypt.compare(password, user.password)
        if(!isMatching){
            return res.status(401).json({
                status: "Failed",
                message: "Invalid credentials"
            })
        }
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: "3h"})
        res.status(201).json({
            status: "Success",
            token: token
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error
            
        })
    }
}