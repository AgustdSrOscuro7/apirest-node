const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definir el esquema de Imagenes
const imagenSchema = new Schema({
  Id: {
    type: Number,
    required: true
  },
  Descripcion: {
    type: String,
    required: true
  },
  Url: {
    type: String,
    required: true
  }
}, {
  timestamps: false, // Deshabilitar createdAt y updatedAt
  versionKey: false  // Deshabilitar __v
});

// Crear el modelo de Imagenes
const Imagenes = mongoose.model('Imagenes', imagenSchema, "Imagenes");

module.exports = { Imagenes };
