// models/MySqlImgHeroes.js
const { DataTypes } = require('sequelize');
const { bdmysql } = require('../database/MySqlConnection');

const ImgHeroes = bdmysql.define('img_heroes', {
    heroes_id: {
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
    ImgHeroes
};
