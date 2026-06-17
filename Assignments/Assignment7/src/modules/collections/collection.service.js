import mongoose from "mongoose"
import authorModel from "../../DB/models/author.model.js"

export const createBooksCollection = async (req, res, next) =>{
    const db = mongoose.connection.db
    await db.createCollection("books", {
        validator: {
            $jsonSchema: {
                required: ['title'],
                properties: {
                    title: {bsonType: String, minLength: 1}
                }
            }
        }
    })
    res.json({ok:1})
}

export const createAuthorsImplicit = async (req, res, next) =>{
    const author = await authorModel.create(req.body)
    res.status(201).json({"acknowledged": true, "insertedId":author._id})
}

export const createLogsCollection = async (req, res, next) =>{
    const db = mongoose.connection.db
    await db.createCollection("logs", {
        capped:true,
        size: 1024*1024
    })
    res.json({ok:1})
}

export const createIndex = async (req, res, next) =>{
    const db = mongoose.connection.db
    await db.collection("books").createIndex({title: 1})
    res.send("title_1")
}