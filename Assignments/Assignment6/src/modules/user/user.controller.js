import { Router } from "express"
import { byEmail, byPK, signup, update } from "./user.service.js"
const userRouter = Router()

userRouter.post('/signup', signup)

userRouter.put('/:id', update)

userRouter.get('/by-email', byEmail)

userRouter.get('/:id', byPK)

export default userRouter;