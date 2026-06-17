import express from 'express'
import checkConnection from './DB/connectionDB.js'
import userRouter from './modules/users/user.controller.js'
const app = express()
const port = 5000

const bootstrap=()=>{

    app.use(express.json())

    checkConnection()

    app.get('/', (req, res, next)=>{
        res.status(200).json({msg:"welcocome to my app"})
    })
    
    app.use('/users', userRouter)

    app.use('{/*demo}',(req, res, next)=>{
        res.status(404).json({msg: `url ${req.originalUrl} does not exist`})
    })

    app.listen(port, ()=> console.log(`running on port ${port}`))
}

export default bootstrap