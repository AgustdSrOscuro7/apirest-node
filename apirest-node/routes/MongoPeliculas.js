const express = require('express');
const router = express.Router();
const { getPeliculas, getPeliculaById, createPelicula, updatePelicula, deletePelicula } = require('../controllers/MongoPeliculas');

router.get('/', getPeliculas);
router.get('/:id', getPeliculaById);
router.post('/', createPelicula);
router.put('/:id', updatePelicula);
router.delete('/:id', deletePelicula);

module.exports = router;
