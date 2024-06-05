const express = require('express');
const router = express.Router();
const { getHeroes, getHeroeById, createHeroe, updateHeroe, deleteHeroe } = require('../controllers/MongoHeroe');

// Rutas para héroes
router.get('/', getHeroes);
router.get('/:id', getHeroeById);
router.post('/', createHeroe);
router.put('/:id', updateHeroe);
router.delete('/:id', deleteHeroe);

module.exports = router;
