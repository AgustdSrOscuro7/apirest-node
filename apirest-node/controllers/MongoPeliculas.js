const { response, request } = require('express');
const { Peliculas } = require('../models/MongoPeliculas');

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
    const { titulo, descripcion, fecha_lanzamiento, img } = req.body;

    try {
        const pelicula = new Peliculas({
            titulo,
            descripcion,
            fecha_lanzamiento,
            img
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
    const { titulo, descripcion, fecha_lanzamiento, img } = req.body;

    try {
        const pelicula = await Peliculas.findById(id);

        if (!pelicula) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la película'
            });
        }

        pelicula.titulo = titulo;
        pelicula.descripcion = descripcion;
        pelicula.fecha_lanzamiento = fecha_lanzamiento;
        pelicula.img = img;

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

    try {
        const pelicula = await Peliculas.findById(id);

        if (!pelicula) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la película'
            });
        }

        await pelicula.remove();

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
