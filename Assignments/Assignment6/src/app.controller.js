import express from 'express'
import './DB/models/index.js'
import { checkConnection } from './DB/connectionDB.js';
import userRouter from './modules/user/user.controller.js';
import postRouter from './modules/post/post.controller.js';
import commentRouter from './modules/comment/comment.controller.js';
const app = express()

const bootstrap = ()=>{

    app.use(express.json())

    checkConnection();

    app.get('/', (req, res, next)=>{
        res.status(200).json({msg: 'welcome to my page'})
    });

    app.use('/users', userRouter)

    app.use('/posts', postRouter)

    app.use('/comments', commentRouter)

    app.use('/*demo',(req, res, next)=>{
        res.status(404).json({error: 'page not found'})
    })

    app.listen(5000, ()=>console.log('server running on port 5000'))
};

export default bootstrap;