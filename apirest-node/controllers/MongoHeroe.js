const { Heroes } = require('../models/MongoHeroes'); // Ajusta la ruta según sea necesario
const mongoose = require('mongoose');

// Obtener todos los héroes
const getHeroes = async (req, res) => {
  try {
    const heroes = await Heroes.find();
    res.status(200).json(heroes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un héroe por ID
const getHeroeById = async (req, res) => {
  try {
    const heroe = await Heroes.findById(req.params.id);
    if (heroe == null) {
      return res.status(404).json({ message: 'No se encontró el héroe' });
    }
    res.status(200).json(heroe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo héroe
const createHeroe = async (req, res) => {
  const heroe = new Heroes({
    Aparicion: req.body.Aparicion,
    Bio: req.body.Bio,
    Casa: req.body.Casa,
    Img: req.body.Img,
    Nombre: req.body.Nombre
  });

  try {
    const newHeroe = await heroe.save();
    res.status(201).json(newHeroe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar un héroe por ID
const updateHeroe = async (req, res) => {
  try {
    const heroe = await Heroes.findById(req.params.id);
    if (heroe == null) {
      return res.status(404).json({ message: 'No se encontró el héroe' });
    }

    if (req.body.Aparicion != null) {
      heroe.Aparicion = req.body.Aparicion;
    }
    if (req.body.Bio != null) {
      heroe.Bio = req.body.Bio;
    }
    if (req.body.Casa != null) {
      heroe.Casa = req.body.Casa;
    }
    if (req.body.Img != null) {
      heroe.Img = req.body.Img;
    }
    if (req.body.Nombre != null) {
      heroe.Nombre = req.body.Nombre;
    }

    const updatedHeroe = await heroe.save();
    res.status(200).json(updatedHeroe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Borrar un héroe por ID
const deleteHeroe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      ok: false,
      msg: 'El id proporcionado no es válido'
    });
  }

  try {
    await Heroes.deleteOne({ _id: id }); // Delete by ID

    res.json({
      ok: true,
      msg: 'Heroe eliminado correctamente'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar el heroe'
    });
  }
};

module.exports = {
  getHeroes,
  getHeroeById,
  createHeroe,
  updateHeroe,
  deleteHeroe
};
