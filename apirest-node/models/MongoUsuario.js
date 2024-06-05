const { Schema, model } = require('mongoose');

const UsuarioPamiiSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La Contraseña es obligatoria']
    },
    img: {
        type: String,
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: [true, 'El rol es obligatorio'],
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
    fecha_creacion: {
        type: Date,
        default: Date.now,
        required: 'Debe tener una fecha de Creación.'
    },
    fecha_actualizacion: { type: Date },
});

// Elimina los campos que no quieres mostrar
UsuarioPamiiSchema.methods.toJSON = function () {
    const { __v, password, _id, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
}

module.exports = model('UsuarioPamii', UsuarioPamiiSchema, 'UsuarioPamii');
