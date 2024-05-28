const express = require('express');
const router = express.Router();
const { getImgHeroes, createImgHero, deleteImgHero } = require('../controllers/MongoImgHeroes');

router.get('/', getImgHeroes);
router.post('/', createImgHero);
router.delete('/:heroes_id/:imagenes_id', deleteImgHero);

module.exports = router;
