const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const server = http.createServer((req ,res)=>{
    const {method, url} = req;
    // const readFileStream = fs.createReadStream(path.resolve('./db.json'), {
    //     encoding:"utf-8",
    //     highWaterMark:200
    // })
    // const writeFileStream = fs.createWriteStream(path.resolve('./db.json'));

    if(method=='GET' && url =='/'){
        res.writeHead(200, {'content-type':'application/json'});
        res.write(JSON.stringify('message: welcome! This is my page :)'))
        res.end();
    }else if(method=='GET' && url =='/users'){
        res.writeHead(200, {'content-type': 'application/json'});
        let db = JSON.parse(fs.readFileSync(path.resolve("./db.json")));
        res.write(JSON.stringify(db));
        res.end();
    }else if(method=='POST' && url =='/users'){
        let data='';
        req.on("data", chunk=>{
            data+=chunk;
        })
        req.on("end", ()=>{
            let parsedData=JSON.parse(data);
            let db = JSON.parse(fs.readFileSync(path.resolve("./db.json")));
            db.users.push(parsedData);
            fs.writeFileSync(path.resolve("./db.json"), JSON.stringify(db, null, 2))
            res.writeHead(201, {'content-type': 'application/json'});
            res.write(JSON.stringify(db));
            res.end();            
        })
    }else if(method=='PATCH' && url.startsWith('/users/')){
        let id = parseInt(url.split('/')[2])
        let data='';
        req.on("data", chunk=>{
            data+=chunk;
        })
        req.on("end", ()=>{
            let parsedData=JSON.parse(data);
            let db = JSON.parse(fs.readFileSync(path.resolve("./db.json")));
            let idx = db.users.findIndex(u=>u.id==id);
            for(key in parsedData){
                db.users[idx][key] = parsedData[key]
            }
            fs.writeFileSync(path.resolve("./db.json"), JSON.stringify(db, null, 2))
            res.writeHead(201, {'content-type': 'application/json'});
            res.write(JSON.stringify(db));
            res.end();            
        })       
    }else if(method=='DELETE' && url.startsWith('/users/')){
        let id = parseInt(url.split('/')[2])
        let db = JSON.parse(fs.readFileSync(path.resolve('./db.json')))
        let idx = db.users.findIndex(u=>u.id==id)
        if(idx != -1){
            let user = db.users.splice(idx, 1)[0]
            fs.writeFileSync(path.resolve('./db.json'), JSON.stringify(db, null, 2))
            res.writeHead(200, {'content-type': 'application/json'})
            res.write(JSON.stringify(user))   
            res.end()         
        }else{
            res.writeHead(404, {'content-type': 'application/json'})
            res.write('not found')  
            res.end()
        }
    }else if(method=='GET' && url.startsWith('/users/')){
        let id = url.split('/')[2]
        let db = JSON.parse(fs.readFileSync(path.resolve('./db.json')))
        let idx = db.users.findIndex(u=> u.id==id)
        if(idx!=-1){
            res.writeHead(200, {'content-type':'application/json'})
            res.write(JSON.stringify(db.users[idx]))
            res.end()
        }else{
            res.writeHead(404, {'content-type': 'application/json'})
            res.write('not found')  
            res.end()
        }
    }else{
        res.writeHead(404, {'content-type': 'application/json'})
        res.write('not found')  
        res.end()
    }
})

server.listen(5000, "localhost", ()=>{
    console.log("server running on localhost port 5000");
})

server.on("close", ()=>{
    console.log("this server is closed");
})

