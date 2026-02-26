import { userModel } from "../../models/user.model.js"

export const getUsers = async (req, res, next)=>{
    const users = await userModel.findAll()
    res.status(200).json({message: "done", users})
}