const { log } = require("node:console");
const path =require("node:path")

// Q1
let exmp1 = {File:"", Dir:""}
let where = () =>{
    exmp1.File=__dirname;
    exmp1.Dir=__filename;
    console.log(exmp1);
}
where();

// Q2
let base = (file_path) => console.log(path.basename(file_path));
base(__filename);

// Q3
let exmp2={ dir:"/folder", name:"app",ext:".js"};
let format = (obj)=> console.log(path.format(obj));
format(exmp2);

// Q4
let ext = (file_name) => console.log(path.extname(file_name));
ext(__filename);

// Q5
let parse = (file_name)=> console.log(path.parse(path.basename(file_name)));
parse(__filename);

// Q6
let abs_check = (p) => console.log(path.isAbsolute(p));
abs_check("./../Assignment1/Part1.js");
abs_check(__filename);

// Q7
function join_seg() {
    let p = ""
    for(let i = 0; i<arguments.length; i++){
        p = path.join(p,arguments[i]);
    }
    console.log(p)
}
join_seg("src","components", "App.js");

// Q8
let get_abs = (rel_path) => console.log(path.resolve(rel_path));
get_abs('./index.js');

// Q9
let join_2seg = (p1, p2) => console.log(path.join(p1, p2));
join_2seg('/folder1', 'folder2/file.txt');


const fs = require("node:fs");
const EventEmitter = require("node:events");
const os = require("node:os");
const path = require("node:path");

// Q10
let delete_file = (file_path) => {
    fs.unlink(file_path, () => {
        console.log(`The ${path.basename(file_path)} is deleted.`);
    });
}
delete_file("/path/to/file.txt");

// Q11
let create_folder = (folder_path) => {
    fs.mkdirSync(folder_path);
    console.log("Success");
}
create_folder("./myFolder");

// Q12
let emitter1 = new EventEmitter();
emitter1.on("start", () => console.log("Welcome event triggered!"));
emitter1.emit("start");

// Q13
let emitter2 = new EventEmitter();
emitter2.on("login", (username) => console.log(`User logged in: ${username}`));
emitter2.emit("login", "Ahmed");

// Q14
let read_file = (file_path) => {
    let data = fs.readFileSync(file_path, "utf8");
    console.log(`the file content => "${data}"`);
}
read_file("./notes.txt");

// Q15
let write_async = (file_path, content) => {
    fs.writeFile(file_path, content, () => {
        console.log("Async save");
    });
}
write_async("./async.txt", "Async save");

// Q16
let check_exist = (p) => console.log(fs.existsSync(p));
check_exist("./notes.txt");

// Q17
let os_info = () => {
    console.log({
        Platform: os.platform(),
        Arch: os.arch()
    });
}
os_info();

