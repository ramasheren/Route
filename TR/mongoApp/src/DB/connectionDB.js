import mongoose from "mongoose"


const checkConnection = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/mongoApp', {serverSelectionTimeoutMS:3000})
    .then(() => console.log("DB connected successfully"))
    .catch((error) => console.log("error in DB connection", error))
}

export default checkConnection