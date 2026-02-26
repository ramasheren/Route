import express from "express";
import sequelize from "./DB/connectionDB.js";
import userRouter from './modules/user/user.controller.js';
import postRouter from "./modules/post/post.controller.js";

const port = 5000;

const bootstrap = async () => {
  const app = express();
  app.use(express.json());

  try {
    await sequelize.authenticate();
    console.log("DB connected successfully");
    await sequelize.sync();
    console.log("DB synced successfully");
  } catch (error) {
    console.log("DB connection/sync failed", error);
  }

    app.use('/users', userRouter);
    
  app.use('/posts',postRouter)

  app.get("/", (req, res) => {
    res.json({ message: "API running" });
  });

  app.use('/*demo', (req, res) => {
    res.status(404).json({ message: "Page not found" });
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

export default bootstrap;
