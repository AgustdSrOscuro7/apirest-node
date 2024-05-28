const express = require('express');
const router = express.Router();
const { getCasting, getCastingByPelicula, createCasting, deleteCasting, castingPost } = require('../controllers/MongoCastingPeliculas');

router.get('/', getCasting);
router.get('/:peliculaId', getCastingByPelicula);
router.post('/', createCasting);
router.delete('/:id', deleteCasting);
router.post('/castingPost', castingPost);

module.exports = router;
