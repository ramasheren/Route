import { DataTypes, Model } from "sequelize";
import sequelize from "../connectionDB.js";

const Post = sequelize.define(
    "post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Post",
    timestamps: true,
    paranoid: true,
  }
);

export default Post;
