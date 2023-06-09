const mongoose = require('mongoose')

const DBConnection = async () => {
    mongoose.set('strictQuery', true)

    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('DataBase online')
    } catch (error) {
        console.log(error)
        throw new Error('Error al conectar con la DataBase')
    }
}

module.exports = { DBConnection }