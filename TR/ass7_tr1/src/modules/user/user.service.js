import userModel from "../../DB/models/user.model.js"

export const createUser = async (req, res, next) =>{
    const user = new userModel(req.body);
    await user.save()
    res.status(201).json({meassage: 'user added', user})
}