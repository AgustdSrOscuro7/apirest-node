const mongoose = require('mongoose');
const { Schema } = mongoose;

const HeroeSchema = Schema({
  Aparicion: {
    type: Date,
    required: [true, 'La fecha de aparición es obligatoria']
  },
  Bio: {
    type: String,
    required: [true, 'La biografía es obligatoria']
  },
  Casa: {
    type: String,
    required: [true, 'La casa es obligatoria']
  },
  Img: {
    type: String,
    required: [true, 'La URL de la imagen es obligatoria']
  },
  Nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    unique: true
}
}, {
    timestamps: false, // Deshabilitar createdAt y updatedAt
    versionKey: false  // Deshabilitar __v
  });

const Heroes = mongoose.model('Heroe', HeroeSchema, 'Heroes');
module.exports = { Heroes };
