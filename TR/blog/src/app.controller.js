const express = require("express");
const mysql = require("mysql2");
const app = express();

const bootstrap = () => {
  app.get("/", (req, res, next) => {
    res.status(200).json({ message: "welcome to my page" });
  });

  const connection = mysql.createConnection({
    host: "localhost",
    database: "retail_store",
    user: "root",
    password: "root",
  });

  connection.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB connected successfully");
    }
  });

  app.use("{/*demo}", (req, res, next) => {
    res.status(404).json({ message: "page not found" });
  });

  app.listen(5000, () => {
    console.log("server is running on port 5000");
  });
};

module.exports = bootstrap;
