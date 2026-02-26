import { sequelize } from "../connectionDB.js";
import { DataTypes, Model } from 'sequelize'

class commentModel extends Model {}

commentModel.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: DataTypes.TEXT
    },
    {
        sequelize, 
        modelName: 'Comment',
        timestamps: true
    }
)

export default commentModel;