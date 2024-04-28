const { Router } = require('express');
const { getImgPeliculas, createImgPelicula, deleteImgPelicula } = require('../controllers/MySqlImgPeliculas');

const router = Router();

// Rutas para Img_Peliculas
router.get('/', getImgPeliculas);
router.post('/', createImgPelicula);
router.delete('/:peliculas_id/:imagenes_id', deleteImgPelicula);

module.exports = router;
