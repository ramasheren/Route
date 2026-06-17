import express from "express"
import bookRouter from "./modules/books/book.controller.js"
import collectionRouter from "./modules/collections/collection.controller.js"
import logRouter from "./modules/logs/log.controller.js"
import checkConnectionDB from "./DB/connectionDB.js"
const app = express()
const port = 5000

const bootstrap = () =>{
    app.use(express.json())

    app.get('/', (req, res, next)=>{
        res.send("welcome to my page")
    })

    checkConnectionDB()

    app.use('/books', bookRouter)
    app.use('/collections', collectionRouter)
    app.use('/logs', logRouter)

    app.get("{/*demo}")

    app.listen(port, ()=> console.log(`running on port ${port}`))
}

export default bootstrap