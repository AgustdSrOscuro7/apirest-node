const { response } = require('express');
const { Imagenes } = require('../models/MongoImagenes');

const getImagenes = async (req, res) => {
    try {
        const imagenes = await Imagenes.find({}, 'descripcion url'); // Solo selecciona estas columnas
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
    const { descripcion, url } = req.body;

    try {
        const imagen = new Imagenes({
            descripcion,
            url
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

    try {
        const imagen = await Imagenes.findById(id);

        if (!imagen) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la imagen'
            });
        }

        await imagen.remove();

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
