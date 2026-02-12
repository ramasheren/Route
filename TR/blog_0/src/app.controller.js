import express from 'express';
const app = express();
import { userRouter } from './modules/users/user.controller.js';

import { checkConnection, connection } from './DB/connectionDB.js';

const bootstrap = ()=>{


app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "welcome to my page" });
});

checkConnection()

app.use(userRouter)

app.use("{/*demo}", (req, res, next) => {
  res.status(404).json({ message: "page not found" });
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

}

export default bootstrap