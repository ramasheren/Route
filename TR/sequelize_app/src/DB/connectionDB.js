import {Sequelize} from 'sequelize'
export const sequelize = new Sequelize('tr2','root','root',{
    host: 'localhost',
    dialect: 'mysql'
})

export const checkConnectionDB = async ()=>{
    try{
        await sequelize.authenticate()
        console.log('DB connected successfully');
        await sequelize.sync()
        console.log('DB synced successfully');
    } catch(error){
        console.error('could not connect DB',error)
    }
}
