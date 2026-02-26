import { Sequelize } from "sequelize";
import { sequelize } from "../DB/connectionDB.js";

export const userModel = sequelize.define('user',
    {name: Sequelize.STRING}
)

