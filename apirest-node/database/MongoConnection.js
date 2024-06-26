const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);

        console.log('Base de Datos de Mongo online...');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al levantar la BD de MongoDb...');
    }
};

module.exports = {
    dbConnection
};
