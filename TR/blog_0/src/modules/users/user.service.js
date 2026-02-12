import mysql from 'mysql2'
import { checkConnection, connection } from "../../DB/connectionDB.js";

export const getUsers = (req, res, next) => {
  connection.execute(
    `select * from Users where userEmail=?`,
    [req.query.email],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "error on query", err });
      } else {
        return res.status(200).json({ message: "done", result });
      }
    },
  );
}

export const signUp = (req, res, next) => {
  const { username, email, password, role } = req.body;

  connection.execute(
    "insert into users(userName, userEmail, userPassword, userRole) values(?,?,?,?)",
    [username, email, password, role],
    (err, result) => {
      if (err) {
        return res.status(400).json({ msg: "error in signup", err });
      } else {
        return res.status(201).json({ msg: " signup successful", result });
      }
    },
  );
}

export const signIn = (req, res, next) => {
  const { email, password } = req.body;
  const query = "select * from users where userEmail=?";
  connection.execute(query, [email], (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "error in query", err });
    }
    if(result.length==0){
      return res.status(404).json({error:"email doesn't exist"})
    }
    if(result[0].userPassword!=password){
      return res.status(400).json({error:"invalid password"})
    }
    res.status(200).json({msg:"signin successful"})
  });
}

export const getProfile = (req, res, next) => {
  const { id } = req.params;
  const query = "select userID, userName from users where userID=?";
  connection.execute(query, [id], (err, result) => {
    if (err) {
      return res.status(400).json({ msg: "error in query", err });
    }
    if(result.length==0){
      return res.status(404).json({error:"profile doesn't exist"})
    }
    res.status(200).json({msg:"done", user:result[0]})
  });
}