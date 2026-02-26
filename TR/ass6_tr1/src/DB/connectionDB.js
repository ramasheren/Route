import { Sequelize } from "sequelize";

const sequelize = new Sequelize("my_blog", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
