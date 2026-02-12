import mysql from 'mysql2';

export const connection = mysql.createConnection({
  host: "localhost",
  database: "Blog_0",
  user: "root",
  password: "root",
});

export const checkConnection = ()=>{
    connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("DB connected successfully");
    }
    });    
}


