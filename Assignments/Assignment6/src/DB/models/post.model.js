import { sequelize } from "../connectionDB.js"
import { DataTypes, Model } from 'sequelize'

class postModel extends Model {}

postModel.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        content: DataTypes.TEXT
    },
    {
        sequelize,
        modelName: 'Post',
        paranoid: true,
        timestamps: true
    }
)

export default postModel;