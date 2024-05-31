const mongoose = require('mongoose');
const { Schema } = mongoose;

const imgheroeSchema = new Schema({
  HeroesId: {
    type: Number,
    required: true
  },
  ImagenesId: {
    type: Number,
    required: true
  }
}, {
  timestamps: false,
  versionKey: false
});

const ImgHeroes = mongoose.model('ImgHeroe', imgheroeSchema, 'ImgHeroes');

module.exports = { ImgHeroes };