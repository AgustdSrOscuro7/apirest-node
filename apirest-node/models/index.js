require('dotenv').config();
const Role = require('./MongoRole');
const Server = require('./server');
const Usuario = require('./MongoUsuario');
//const Heroes = require('./MongoHeroes');

// Importa los modelos de MySQL
const HeroeMySQL = require('./MySqlHeroes');
const UsuarioMySQL = require('./MySqlUsuario');

module.exports = {
    Role, 
    Server,
    Usuario,
    //Heroes, // Exporta el modelo de MongoDB
    HeroeMySQL, // Exporta el modelo de MySQL
    UsuarioMySQL,

    // Agrega aquí los demás modelos de MongoDB si los tienes
}
