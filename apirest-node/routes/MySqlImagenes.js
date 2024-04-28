const { Router } = require('express');
const { getImagenes, createImagen, deleteImagen } = require('../controllers/MySqlImagenes');

const router = Router();

// Rutas para Imagenes
router.get('/', getImagenes);
router.post('/', createImagen);
router.delete('/:id', deleteImagen);

module.exports = router;
