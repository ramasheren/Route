import mongoose from "mongoose"

const authorSchema = mongoose.Schema({
    name: String,
    nationality: String
})

const authorModel = mongoose.models.author || mongoose.model("author", authorSchema)

export default authorModel