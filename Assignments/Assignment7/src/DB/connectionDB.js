import mongoose from "mongoose"

const checkConnectionDB = async () =>{
    await mongoose.connect("mongodb://localhost:27017/assignment7_2", {serverSelectionTimeoutMS:3000})
    .then(()=> console.log("DB connected successfully"))
    .catch((error)=> console.log("DB connection error", error))
}

export default checkConnectionDB