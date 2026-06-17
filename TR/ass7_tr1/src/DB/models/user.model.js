import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    confirmed: Boolean
},
{
    strict: false,
    timestamps: true
})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)
userModel.syncIndexes()
export default userModel