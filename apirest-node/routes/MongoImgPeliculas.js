const express = require('express');
const router = express.Router();
const { getImgPeliculas, createImgPelicula, deleteImgPelicula } = require('../controllers/MongoImgPeliculas');

router.get('/', getImgPeliculas);
router.post('/', createImgPelicula);
router.delete('/:peliculas_id/:imagenes_id', deleteImgPelicula);

module.exports = router;
