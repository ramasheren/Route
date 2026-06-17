import express from 'express'
import checkConnectionDB from './DB/connectionDB.js'
import userRouter from './modules/user/user.controller.js'
const app = express()
const port = 3000

const bootstrap = async () =>{
    app.use(express.json())
    app.get('/', (req, res, next)=>res.send('Hello World'))

    await checkConnectionDB()

    app.use('/users', userRouter)

    app.get('/*demo', (req, res, next)=>{
        res.status(404).json({message: `URL ${req.originalUrl} not found`})
    })
    app.listen(port, ()=> console.log(`app is listening on port ${port}`))  

}

export default bootstrap;