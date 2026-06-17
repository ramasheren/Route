import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    year: Number,
    genres: [String]
})

const bookModel = mongoose.models.book || mongoose.model("book", bookSchema)

export default bookModel