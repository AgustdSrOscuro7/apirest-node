const { response } = require('express');
const { ImgPeliculas } = require('../models/MySqlImgPeliculas');

const getImgPeliculas = async (req, res) => {
    try {
        const imgPeliculas = await ImgPeliculas.findAll({
            attributes: ['peliculas_id', 'imagenes_id'], // Solo selecciona estas columnas
        });
        res.json({
            ok: true,
            imgPeliculas
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las imágenes de películas'
        });
    }
};

const createImgPelicula = async (req, res) => {
    const { peliculas_id, imagenes_id } = req.body;

    try {
        const imgPelicula = await ImgPeliculas.create({
            peliculas_id,
            imagenes_id
        });

        res.json({
            ok: true,
            imgPelicula
        });
    } catch (error) {
        console.log(error);
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
            where: {
                peliculas_id,
                imagenes_id
            }
        });

        if (!imgPelicula) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la relación de imagen de película'
            });
        }

        await imgPelicula.destroy();

        res.json({
            ok: true,
            msg: 'Relación de imagen de película eliminada correctamente'
        });
    } catch (error) {
        console.log(error);
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
