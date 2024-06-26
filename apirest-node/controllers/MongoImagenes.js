const { response } = require('express');
const { Imagenes } = require('../models/MongoImagenes');
const mongoose = require('mongoose');

const getImagenes = async (req, res) => {
    try {
        const imagenes = await Imagenes.find({}, 'Descripcion Url'); // Solo selecciona estas columnas
        res.json({
            ok: true,
            imagenes
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las imágenes'
        });
    }
};

const createImagen = async (req, res) => {
    const { Descripcion, Url } = req.body;

    try {
        const imagen = new Imagenes({
            Descripcion,
            Url
        });

        await imagen.save();

        res.json({
            ok: true,
            imagen
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear la imagen'
        });
    }
};

const deleteImagen = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        ok: false,
        msg: 'El id proporcionado no es válido'
      });
    }
  
    try {
      await Imagenes.deleteOne({ _id: id }); // Delete by ID
  
      res.json({
        ok: true,
        msg: 'Imagen eliminada correctamente'
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        ok: false,
        msg: 'Error al eliminar la imagen'
      });
    }
  };

module.exports = {
    getImagenes,
    createImagen,
    deleteImagen
};
