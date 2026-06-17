import mongoose from "mongoose"

const logSchema = new mongoose.Schema({
    book_id: String,
    action: String
})

const logModel = mongoose.models.log || mongoose.model("log", logSchema)

export default logModel