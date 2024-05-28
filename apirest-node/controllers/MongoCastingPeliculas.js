const { CastingPelicula } = require('../models/MongoCastingPelicula');
const { Heroes } = require('../models/MongoHeroes');
const { Pelicula } = require('../models/MongoPeliculas');

const getCasting = async (req, res) => {
    try {
        const casting = await CastingPelicula.find();
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
        const casting = await CastingPelicula.find({ PeliculasId: peliculaId });
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
    const { personaje, PeliculasId, HeroesId } = req.body;

    try {
        const casting = new CastingPelicula({ Personaje: personaje, PeliculasId, HeroesId });
        await casting.save();

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
        const casting = await CastingPelicula.findById(id);

        if (!casting) {
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el casting'
            });
        }

        await casting.remove();

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
    const { personaje, PeliculasId, HeroesId } = req.body;

    const casting = new CastingPelicula({ Personaje: personaje, PeliculasId, HeroesId });

    try {
        const existeCasting = await CastingPelicula.findOne({ Personaje: personaje });

        if (existeCasting) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un personaje llamado: ' + personaje
            });
        }

        const existeHeroe = await Heroes.findOne({ Id: HeroesId });

        if (!existeHeroe) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe un héroe con el id: ' + HeroesId
            });
        }

        const existePelicula = await Peliculas.findOne({ Id: PeliculasId });

        if (!existePelicula) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe una película con el id: ' + PeliculasId
            });
        }

        const newCasting = await casting.save();

        casting.id = newCasting._id;

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
