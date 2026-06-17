import { Router } from "express";
import * as US from "./user.service.js"

const userRouter = Router()

userRouter.post('/', US.createUser)

export default userRouter