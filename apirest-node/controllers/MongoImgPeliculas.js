const { response } = require('express');
const { ImgPeliculas } = require('../models/MongoImgPeliculas');

const getImgPeliculas = async (req, res) => {
    try {
        const imgPeliculas = await ImgPeliculas.find({}, 'peliculas_id imagenes_id'); // Solo selecciona estas columnas
        res.json({
            ok: true,
            imgPeliculas
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las imágenes de películas'
        });
    }
};

const createImgPelicula = async (req, res) => {
    const { peliculas_id, imagenes_id } = req.body;

    try {
        const imgPelicula = new ImgPeliculas({
            peliculas_id,
            imagenes_id
        });

        await imgPelicula.save();

        res.json({
            ok: true,
            imgPelicula
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear la relación de imagen de película'
        });
    }
};

const deleteImgPelicula = async (req, res) => {
    const { peliculas_id, imagenes_id } = req.params;

    try {
        const imgPelicula = await ImgPeliculas.findOne({
            peliculas_id,
            imagenes_id
        });

        if (!imgPelicula) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la relación de imagen de película'
            });
        }

        await imgPelicula.remove();

        res.json({
            ok: true,
            msg: 'Relación de imagen de película eliminada correctamente'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar la relación de imagen de película'
        });
    }
};

module.exports = {
    getImgPeliculas,
    createImgPelicula,
    deleteImgPelicula
};
