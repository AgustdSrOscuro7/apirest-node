const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Heroes } = require('./MongoHeroes');
const { Peliculas } = require('./MongoPeliculas');

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
    Heroes: Heroes.schema,
    Peliculas: Peliculas.schema
  }, {
    timestamps: false,
    versionKey: false
  });
  
  const CastingPelicula = mongoose.model('CastingPelicula', castingPeliculaSchema, 'CastingPelicula');
  
  module.exports = { CastingPelicula };
