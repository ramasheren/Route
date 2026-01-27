const path = require("node:path")
require("./temp.js")

console.log(path.basename(__dirname))
console.log(path.basename(__filename))