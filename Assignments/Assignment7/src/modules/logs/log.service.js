import mongoose from "mongoose"

export const insertLog = async (req, res, next) =>{
    const db = mongoose.connection.db
    const log = await db.collection("logs").insertOne(req.body)
    res.json(log)
}