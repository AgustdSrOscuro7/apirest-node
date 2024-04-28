const { response, request } = require('express');
const { bdmysql } = require('../database/MySqlConnection');
const { Peliculas } = require('../models/MySqlPeliculas');
const { body } = require('express-validator');

const getPeliculas = async (req, res) => {
    try {
        const peliculas = await Peliculas.findAll();
        res.json({
            ok: true,
            peliculas
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las películas'
        });
    }
};

const getPeliculaById = async (req, res) => {
    const { id } = req.params;

    try {
        const pelicula = await Peliculas.findByPk(id);
        
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
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener la película'
        });
    }
};

const createPelicula = async (req, res) => {
    const { titulo, descripcion, fecha_lanzamiento, img } = req.body;

    try {
        const pelicula = await Peliculas.create({
            titulo,
            descripcion,
            fecha_lanzamiento: fecha_lanzamiento,
            img
        });

        res.json({
            ok: true,
            pelicula
        });
    } catch (error) {
        console.log(error);
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
        const pelicula = await Peliculas.findByPk(id);

        if (!pelicula) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la película'
            });
        }

        pelicula.titulo = titulo;
        pelicula.descripcion = descripcion;
        pelicula.fechaLanzamiento = fecha_lanzamiento;
        pelicula.img = img;

        await pelicula.save();

        res.json({
            ok: true,
            pelicula
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar la película'
        });
    }
};

const deletePelicula = async (req, res) => {
    const { id } = req.params;

    try {
        const pelicula = await Peliculas.findByPk(id);

        if (!pelicula) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la película'
            });
        }

        await pelicula.destroy();

        res.json({
            ok: true,
            msg: 'Película eliminada correctamente'
        });
    } catch (error) {
        console.log(error);
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
