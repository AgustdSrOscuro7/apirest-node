const { Router } = require('express');
const {
    getCasting,
    getCastingByPelicula,
    createCasting,
    deleteCasting,
    castingPost
} = require('../controllers/MySqlCastingPeliculas');

const router = Router();

router.get('/casting', getCasting);
router.get('/casting/:peliculaId', getCastingByPelicula);
router.post('/casting', createCasting);
router.delete('/casting/:id', deleteCasting);
router.post('/casting/post', castingPost);

module.exports = router;
