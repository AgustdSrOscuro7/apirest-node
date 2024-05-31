const mongoose = require('mongoose');
const { Schema } = mongoose;

const HeroeSchema = new Schema({
    aparicion: {
        type: Date,
        required: [true, 'Debe tener una fecha de aparición']
    },
    bio: {
        type: String,
        required: [true, 'La biografía es obligatoria'],
    },
    casa: {
        type: String,
        required: [true, 'La casa es obligatoria'],
    },
    img: {
        type: String,
        required: [true, 'La imagen es obligatoria'],
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
});

HeroeSchema.methods.toJSON = function() {
    const { __v, ...data  } = this.toObject();
    return data;
}

const Heroes = mongoose.model('Heroe', HeroeSchema, 'Heroes');
module.exports = { Heroes };
