const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definir el esquema de Peliculas
const peliculaSchema = new Schema({
  Id: {
    type: Number,
    required: true
  },
  Descripcion: {
    type: String,
    required: true
  },
  FechaLanzamiento: {
    type: Date,
    required: true
  },
  Img: {
    type: String,
    required: true
  },
  Titulo: {
    type: String,
    required: true
  }
}, {
  timestamps: false, // Deshabilitar createdAt y updatedAt
  versionKey: false  // Deshabilitar __v
});

// Crear el modelo de Peliculas
const Peliculas = mongoose.model('Peliculas', peliculaSchema, "Peliculas");

module.exports = { Peliculas };
