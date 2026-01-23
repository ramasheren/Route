const path = require("node:path");
const fs = require("node:fs");
let absPath = path.resolve("./big.txt");
console.log(absPath);

// Q1
const readFileStream = fs.createReadStream(absPath, {
    encoding:"UTF-8",
    highWaterMark:5000
}
)
readFileStream.on("data", (chunk)=>{
    console.log("====================data=====================");
    console.log(chunk);
})

// Q2
const writeFileStream = fs.createWriteStream(path.resolve("./copBig.txt"));
readFileStream.on("data", (chunk)=>{
    writeFileStream.write(chunk);
})

// Q3
const {createGzip} = require("node:zlib");
const gzip = createGzip();
const writeFileStreamZip = fs.createWriteStream(path.resolve("./copBig.zip"));
readFileStream.pipe(gzip).pipe(writeFileStreamZip) 
readFileStream.on("data", (chunk)=>{
    writeFileStream.write(chunk);
})
