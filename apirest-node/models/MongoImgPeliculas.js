const mongoose = require('mongoose');
const { Schema } = mongoose;

const imgpeliculaSchema = new Schema({
  ImagenesId: {
    type: Number,
    required: true
  },
  PeliculasId: {
    type: Number,
    required: true
  }
}, {
  timestamps: false,
  versionKey: false
});

const ImgPeliculas = mongoose.model('ImgPeliculas', imgpeliculaSchema );

module.exports = { ImgPeliculas };
