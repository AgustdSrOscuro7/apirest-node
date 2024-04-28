const { Router } = require('express');
const { getImgHeroes, createImgHero, deleteImgHero } = require('../controllers/MySqlImagenHeroes');

const router = Router();

// Rutas para Img_Heroes
router.get('/img-heroes', getImgHeroes);
router.post('/img-heroes', createImgHero);
router.delete('/img-heroes/:heroes_id/:imagenes_id', deleteImgHero);

module.exports = router;
