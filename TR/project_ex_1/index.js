const express = require('express');
const app = express()

app.use(express.json())

app.get('/users',(req,res,next)=>{
   res.send('users')
})

app.post('/users',(req,res,next)=>{
   res.send('post users')
})

app.patch('/users',(req,res,next)=>{
   res.send('patch users')
})


app.delete('/users',(req,res,next)=>{
   res.send('delete users')
})

app.use('{/*demo}',(req, res, next)=>{
    res.status(404).json({message: 'error 404 page not found'})
})

app.listen(5000, ()=>{
   console.log('this server is running on port 5000')
}) 