import mongoose from "mongoose";

const checkConnectionDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/ass7tr1', {serverSelectionTimeoutMS: 5000})
    .then(()=>{
        console.log('DB connected successfully');
    })
    .catch((error)=>{
        console.log('DB connection failed', error);
    })
}

export default checkConnectionDB