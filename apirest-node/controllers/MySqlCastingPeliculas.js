const { CastingPelicula } = require('../models/MySqlCastingPelicula');
const { Heroes } = require('../models/MySqlHeroes');
const { Peliculas } = require('../models/MySqlPeliculas');

const getCasting = async (req, res) => {
    try {
        const casting = await CastingPelicula.findAll();
        res.json({
            ok: true,
            casting
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener el casting'
        });
    }
};

const getCastingByPelicula = async (req, res) => {
    const { peliculaId } = req.params;

    try {
        const casting = await CastingPelicula.findAll({
            where: {
                pelicula_id: peliculaId
            }
        });

        res.json({
            ok: true,
            casting
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener el casting por película'
        });
    }
};

const createCasting = async (req, res) => {
    const { personaje, peliculas_id, heroes_id } = req.body;

    try {
        const casting = await CastingPelicula.create({
            personaje, peliculas_id, heroes_id
        });

        res.json({
            ok: true,
            casting
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear el casting'
        });
    }
};

const deleteCasting = async (req, res) => {
    const { id } = req.params;

    try {
        const casting = await CastingPelicula.findByPk(id);

        if (!casting) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el casting'
            });
        }

        await casting.destroy();

        res.json({
            ok: true,
            msg: 'Casting eliminado correctamente'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar el casting'
        });
    }
};

const castingPost = async (req, res) => {
    const { personaje, peliculas_id, heroes_id } = req.body;

    const casting = new CastingPelicula({ personaje, peliculas_id, heroes_id });

    try {
        const existeCasting = await CastingPelicula.findOne({ where: { personaje: personaje } });

        if (existeCasting) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un personaje llamado: ' + personaje
            });
        }

        const existeHeroe = await Heroes.findOne({ where: { id_heroe: heroes_id } });

        if (!existeHeroe) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe un héroe con el id: ' + heroes_id
            });
        }

        const existePelicula = await Peliculas.findOne({ where: { id_pelicula: peliculas_id } });

        if (!existePelicula) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe una película con el id: ' + peliculas_id
            });
        }

        const newCasting = await casting.save();

        casting.id = newCasting.null;

        res.json({
            ok: true,
            data: casting
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',
            err: error
        });

    }
};

module.exports = {
    getCasting,
    getCastingByPelicula,
    createCasting,
    deleteCasting,
    castingPost
};
