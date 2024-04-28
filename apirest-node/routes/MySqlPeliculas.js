// routes/peliculas.js
const { Router } = require('express');
const router = Router();

const {
    getPeliculas,
    getPeliculaById,
    createPelicula,
    updatePelicula,
    deletePelicula
} = require('../controllers/MysqlPeliculas');

/*
const {
    validarCampos,
    validarJWT,
    esAdminRole,
    tieneRole
} = require('../middlewares');
*/

router.get('/', 
//validarJWT, // Middleware para el token
//esAdminRole, // Middleware para validar el rol de administrador
getPeliculas);

router.get('/:id', 
//validarJWT, // Middleware para el token
//esAdminRole, // Middleware para validar el rol de administrador
getPeliculaById);

router.post('/', 
//validarJWT, // Middleware para el token
//esAdminRole, // Middleware para validar el rol de administrador
createPelicula);

router.put('/:id', 
//validarJWT, // Middleware para el token
//esAdminRole, // Middleware para validar el rol de administrador
updatePelicula);

router.delete('/:id',
//validarJWT, // Middleware para el token
//esAdminRole, // Middleware para validar el rol de administrador
deletePelicula);

module.exports = router;
