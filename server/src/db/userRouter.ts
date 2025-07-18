import express, { Router } from "express"
import { registerUser } from "./authController"


const userRouter = express.Router()

userRouter.post("/register", registerUser)








export default userRouter;