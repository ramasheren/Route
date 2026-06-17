import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true, 
        minLength: 3,
        maxLength: 10
    },
    lastname: {
        type: String,
        required: true,
        trim: true, 
        minLength: 3,
        maxLength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    },
    age: {
        type: Number,
        min: 18
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    confirmed: Boolean
},{
    timestamps: true
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel