const { response } = require("express");
const { UsuarioPamii } = require("../models/MySqlUsuario");
const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/generar-jwt");

const login = async (req, res = response) => {
    const { correo, password } = req.body;

    try {
        // Verificar si el email existe
        const usuario = await UsuarioPamii.findOne({ where: { correo: correo } });
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario / Password no son correctos - correo: ' + correo
            });
        }

        // Verificar si el usuario está activo
        if (!usuario.estado) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // Agrega logs de depuración aquí
        const validaPassword = bcryptjs.compareSync(password, usuario.password);
        console.log('Contraseña ingresada:', password);
        console.log('Contraseña almacenada en la base de datos:', usuario.password);
        console.log('Resultado de la comparación:', validaPassword);

        // Verificar la contraseña
        if (!validaPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            ok: true,
            msg: 'Login ok',
            uid: usuario.id,
            bpid: usuario.brandProviderId,
            role: usuario.rol,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador...'
        });
    }
}

module.exports = {
    login
}
