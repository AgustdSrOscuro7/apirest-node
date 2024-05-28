const mongoose = require('mongoose');
const { Schema } = mongoose;

const castingPeliculaSchema = new Schema({
    Id: {
      type: Number,
      required: true
    },
    HeroesId: {
      type: Number,
      required: true
    },
    PeliculasId: {
      type: Number,
      required: true
    },
    Personaje: {
      type: String,
      required: true
    },
    Hero: heroSchema,
    Pelicula: peliculaSchema
  }, {
    timestamps: false,
    versionKey: false
  });
  
  const CastingPelicula = mongoose.model('CastingPelicula', castingPeliculaSchema);
  
  module.exports = { CastingPelicula };