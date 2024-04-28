const { response } = require('express');
const { ImgHeroes } = require('../models/MySqlImgHeroes');
const bcryptjs = require('bcryptjs');
const { Heroes } = require('../models/MySqlHeroes');

const getImgHeroes = async (req, res) => {
    try {
        const imgHeroes = await ImgHeroes.findAll({
            attributes: ['heroes_id', 'imagenes_id'], // Solo selecciona estas columnas
        });
        res.json({
            ok: true,
            imgHeroes
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las imágenes de héroes'
        });
    }
};

const createImgHero = async (req, res) => {
    const { heroes_id, imagenes_id } = req.body;

    try {
        const imgHero = await ImgHeroes.create({
            heroes_id,
            imagenes_id
        });

        res.json({
            ok: true,
            imgHero
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear la imagen de héroe'
        });
    }
};

const deleteImgHero = async (req, res) => {
    const { heroes_id, imagenes_id } = req.params;

    try {
        const imgHero = await ImgHeroes.findOne({
            where: {
                heroes_id,
                imagenes_id
            }
        });

        if (!imgHero) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró la imagen de héroe'
            });
        }

        await imgHero.destroy();

        res.json({
            ok: true,
            msg: 'Imagen de héroe eliminada correctamente'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar la imagen de héroe'
        });
    }
};

module.exports = {
    getImgHeroes,
    createImgHero,
    deleteImgHero
};
