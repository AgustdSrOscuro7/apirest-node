const { response, request } = require('express');
const { Peliculas } = require('../models/MongoPeliculas');
const mongoose = require('mongoose');

const getPeliculas = async (req, res) => {
  try {
    const peliculas = await Peliculas.find();
    res.json({
      ok: true,
      peliculas
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al obtener las películas'
    });
  }
};

const getPeliculaById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      ok: false,
      msg: 'El id proporcionado no es válido'
    });
  }

  try {
    const pelicula = await Peliculas.findById(id);

    if (!pelicula) {
      return res.status(404).json({
        ok: false,
        msg: 'No se encontró la película'
      });
    }

    res.json({
      ok: true,
      pelicula
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al obtener la película'
    });
  }
};

const createPelicula = async (req, res) => {
  const { Descripcion, FechaLanzamiento, Img, Titulo } = req.body;

  try {
    const pelicula = new Peliculas({
      Descripcion,
      FechaLanzamiento,
      Img,
      Titulo
    });

    await pelicula.save();

    res.json({
      ok: true,
      pelicula
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al crear la película'
    });
  }
};

const updatePelicula = async (req, res) => {
  const { id } = req.params;
  const { Descripcion, FechaLanzamiento, Img, Titulo } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      ok: false,
      msg: 'El id proporcionado no es válido'
    });
  }

  try {
    const pelicula = await Peliculas.findById(id);

    if (!pelicula) {
      return res.status(404).json({
        ok: false,
        msg: 'No se encontró la película'
      });
    }

    pelicula.Descripcion = Descripcion;
    pelicula.FechaLanzamiento = FechaLanzamiento;
    pelicula.Img = Img;
    pelicula.Titulo = Titulo;

    await pelicula.save();

    res.json({
      ok: true,
      pelicula
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al actualizar la película'
    });
  }
};

const deletePelicula = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      ok: false,
      msg: 'El id proporcionado no es válido'
    });
  }

  try {
    await Peliculas.deleteOne({ _id: id }); // Delete by ID

    res.json({
      ok: true,
      msg: 'Película eliminada correctamente'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al eliminar la película'
    });
  }
};

module.exports = {
  getPeliculas,
  getPeliculaById,
  createPelicula,
  updatePelicula,
  deletePelicula
};
