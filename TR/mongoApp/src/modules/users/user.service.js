import userModel from "../../DB/models/user.model.js"

export const createUser = async (req, res, next)=>{
    // const user = new userModel(req.body)
    // await user.save()

    try{
        const user = await userModel.insertOne(req.body)
        res.status(201).json({msg:"done", user})
    }
    catch(error){
        res.status(500).json({error})

    }
}