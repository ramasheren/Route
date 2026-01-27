const express = require('express')
const { readFileSync, writeFileSync } = require('fs')
const app = express()
const {resolve} = require('path')
const fs = require('fs')


app.use(express.json())


app.post('/users', (req, res, next)=>{
    let users = JSON.parse(fs.readFileSync(resolve('./users.json')))
    for(user of users){
        if(req.body.email==user.email){
            return res.status(409).send('error 409 conflict. user already exists')
        }
    }
    users.push(req.body)
    fs.writeFileSync(resolve('./users.json'), JSON.stringify(users, null, 2))
    res.status(201).send(req.body)
})

app.patch("/users/:id",(req, res, next)=>{
    let users = JSON.parse(fs.readFileSync(resolve('./users.json')))
    let idx = users.findIndex(u=>u.id==req.params.id)
    if(idx==-1) return res.status(404).send('error 404 user not found')    
    for(key in req.body){
        users[idx][key] = req.body[key]
    }
    fs.writeFileSync(resolve('./users.json'), JSON.stringify(users, null, 2))
    res.status(200).send(users[idx])
})

app.delete("/users/:id",(req, res, next)=>{
    let users = JSON.parse(fs.readFileSync(resolve('./users.json')))
    let idx = users.findIndex(u=>u.id==req.params.id)
    if(idx==-1) return res.status(404).send('error 404 user not found')    
    users.pop(idx)
    fs.writeFileSync(resolve('./users.json'), JSON.stringify(users, null, 2))
    res.status(200).send(users)
})

app.get("/users/getByName",(req, res, next)=>{
    let users = JSON.parse(fs.readFileSync(resolve('./users.json')))
    let idx = users.findIndex(u=>u.name==req.query.name)
    if(idx==-1) return res.status(404).send('error 404 user not found')    
    res.status(200).send(users[idx])
})

app.get("/users/filter",(req, res, next)=>{
    let users = JSON.parse(fs.readFileSync(resolve('./users.json')))
    let filtered = []
    for(user of users){
        if(Number(user.age)<=Number(req.query.minAge)) filtered.push(user)
    }
    res.status(200).send(filtered)
})

app.get("/users/:id",(req, res, next)=>{
    let users = JSON.parse(fs.readFileSync(resolve('./users.json')))
    let idx = users.findIndex(u=>u.id==req.params.id)
    if(idx==-1) return res.status(404).send('error 404 user not found')    
    res.status(200).send(users[idx])
})

app.use('/*demo', (req, res, next)=>{
    res.status(404).send('error 404 page not found')
})

app.listen(5000, ()=>{
    console.log('server is running on port 5000');
})