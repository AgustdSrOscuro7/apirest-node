// models/MySqlImagenes.js
const { DataTypes } = require('sequelize');
const { bdmysql } = require('../database/MySqlConnection');

const Imagenes = bdmysql.define('imagenes', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
// Agrega esta parte para deshabilitar timestamps automáticos
}, {
    timestamps: false, // Esto evita la creación de las columnas 'createdAt' y 'updatedAt'
  });
module.exports = {
    Imagenes
};
