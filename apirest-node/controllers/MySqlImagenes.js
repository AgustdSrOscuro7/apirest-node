const { response } = require('express');
const { Imagenes } = require('../models/MySqlImagenes');
const { Heroes } = require('../models/MySqlHeroes');
const { Peliculas } = require('../models/MySqlPeliculas');


const getImagenes = async (req, res) => {
    try {
        const imagenes = await Imagenes.findAll({
            attributes: ['id', 'descripcion', 'url'], // Solo selecciona estas columnas
        });
        res.json({
            ok: true,
            imagenes
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las imágenes'
        });
    }
};

const createImagen = async (req, res) => {
    const { descripcion, url } = req.body;

    try {
        const imagen = await Imagenes.create({
            descripcion,
            url
        });

        res.json({
            ok: true,
            imagen
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear la imagen'
        });
    }
};

const deleteImagen = async (req, res) => {
    const { id } = req.params;

    try {
        const imagen = await Imagenes.findByPk(id);

        if (!imagen) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la imagen'
            });
        }

        await imagen.destroy();

        res.json({
            ok: true,
            msg: 'Imagen eliminada correctamente'
        });
    } catch (error) {
        console.log(error);
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
