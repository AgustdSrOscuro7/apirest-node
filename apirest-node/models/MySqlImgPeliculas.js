// models/MySqlImgPeliculas.js
const { DataTypes } = require('sequelize');
const { bdmysql } = require('../database/MySqlConnection');

const ImgPeliculas = bdmysql.define('img_peliculas', {
    peliculas_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
    },
    imagenes_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
    },
    // Agrega esta parte para deshabilitar timestamps automáticos
}, {
    timestamps: false, // Esto evita la creación de las columnas 'createdAt' y 'updatedAt'
  });

module.exports = {
    ImgPeliculas
};
