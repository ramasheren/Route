import { sequelize } from "../connectionDB.js";
import {DataTypes} from 'sequelize'

const userModel = sequelize.define('User',
{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate:{
            isEmail:true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        checkPasswordLength(value){
            if(value.length<=6){
                throw new Error('password has to be more than 6 characters')
            }
        }
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user'
    }
},
{
    hooks:{
        beforeCreate(user){
            if(user.name.length<2){
                throw new Error("name can't be less 2 characters")
            }
        }
    }
}
)

export default userModel