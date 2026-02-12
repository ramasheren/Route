import { checkConnection, connection } from "../../DB/connectionDB.js";
import { Router } from "express";
export const userRouter = Router()
import { getUsers, signUp, signIn, getProfile } from "./user.service.js";

userRouter.get("/users", getUsers);

userRouter.post("/users/signup", signUp);

userRouter.post("/users/signin", signIn);

userRouter.get("/users/profile/:id", getProfile);