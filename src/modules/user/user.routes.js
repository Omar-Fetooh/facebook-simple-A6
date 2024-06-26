import express from "express"
import { login, logout, register } from "./user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.patch("/logout", logout)




export default userRouter;