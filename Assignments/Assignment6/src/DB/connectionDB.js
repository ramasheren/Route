import {Sequelize} from 'sequelize'

export const sequelize = new Sequelize('sequelize_blog','root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

export const checkConnection = async ()=>{
    try{
        await sequelize.authenticate()
        console.log('DB connected successfully');
        await sequelize.sync({alter:false, force:false})
        console.log('DB synced successfully');
    }catch(error){
        console.log("DB couldn't connect", error);  
    }
}
    