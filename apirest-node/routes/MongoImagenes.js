const express = require('express');
const router = express.Router();
const { getImagenes, createImagen, deleteImagen } = require('../controllers/MongoImagenes');

router.get('/', getImagenes);
router.post('/', createImagen);
router.delete('/:id', deleteImagen);

module.exports = router;
