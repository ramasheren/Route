const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res)=>{
    const {method, url}=req;

    if(method=="GET" && url=="/"){
        res.writeHead(200, {"content-type": "application/json"});
        res.write(JSON.stringify({message: "hey that's my page"}))
    }else if(method=="GET" && url=="/users"){
        res.writeHead(200, {"content-type": "application/json"});
        res.write(JSON.stringify(users))
    }
    res.end()
})
server.listen(3000, "localhost", ()=>{
    console.log("server running on localhost port 3000")

})

server.on("close", ()=>{
    console.log("this server is closed")
    fs.writeFileSync(path.resolve('./log.txt'), `server closed at ${new Date()}\n`, {flag:'a'})
})

server.on("error", (error)=>{
    if(error.code == "EADDRINUSE"){server.close()}
    else console.log(error)
})

let users = [
  {
    "name": "Bird Ramsey",
    "gender": "male",
    "email": "birdramsey@nimon.com"
  },
  {
    "name": "Lillian Burgess",
    "gender": "female",
    "email": "lillianburgess@luxuria.com"
  },
  {
    "name": "Kristie Cole",
    "gender": "female",
    "email": "kristiecole@quadeebo.com"
  },
  {
    "name": "Leonor Cross",
    "gender": "female",
    "email": "leonorcross@gronk.com"
  },
  {
    "name": "Marsh Mccall",
    "gender": "male",
    "email": "marshmccall@ultrimax.com"
  }
]

