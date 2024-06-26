const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definir el esquema de Imagenes
const imagenSchema = new Schema({
  
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
const Imagenes = mongoose.model('Imagen', imagenSchema, 'Imagenes');

module.exports = { Imagenes };
