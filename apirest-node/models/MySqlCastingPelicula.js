const { DataTypes } = require('sequelize');
const { bdmysql } = require('../database/MySqlConnection');

const CastingPelicula = bdmysql.define('casting_pelicula', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    personaje: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    peliculas_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'peliculas',  // Reemplaza con el nombre correcto de la tabla de películas
            key: 'id'
        }
    },
    heroes_id: {  // Asumiendo que esto es lo que necesitas, ajusta si es diferente
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

// Definir la clave primaria después de la definición de la tabla
CastingPelicula.removeAttribute('id');
CastingPelicula.removeAttribute('createdAt');
CastingPelicula.removeAttribute('updatedAt');
CastingPelicula.removeAttribute('deletedAt');

module.exports = {
    CastingPelicula
};
