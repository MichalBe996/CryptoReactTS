import express from "express"
import { registerUser, loginUser } from "./authController"


const userRouter = express.Router()


userRouter.route("/login").post(loginUser)
userRouter.post("/register", registerUser)








export default userRouter;