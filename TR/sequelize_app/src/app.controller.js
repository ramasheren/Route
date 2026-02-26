import express from 'express'
import { checkConnectionDB } from './DB/connectionDB.js';
import userRouter from './modules/users/user.controller.js';
const app = express()
const port = 5000

const bootstrap = ()=>{

    app.use(express.json());
    
    checkConnectionDB()

    app.get("/", (req, res, next) => {
        res.status(200).json({ message: "welcome to my page" });
    });

    app.use('/users', userRouter)
    
        
    app.use("{/*demo}", (req, res, next) => {
        res.status(404).json({ message: "page not found" });
    });

    app.listen(port,()=>  console.log(`server is runmning on port ${port}`))
}

export default bootstrap