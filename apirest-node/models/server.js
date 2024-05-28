const express = require('express')
const cors = require('cors')

const { dbConnection } = require('../database/MongoConnection');
//const { bdmysql } = require('../database/MySqlConnection');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.pathsMySql = {
            auth: '/login',
            usuarios: '/usuarios',
            heroes: '/heroes',
            peliculas: '/peliculas',
            castingPelicula: '/casting',
            imagenes: '/imagenes',
            imgHeroe: '/imgHeroe',
            imgPeliculas: '/imgPeliculas'
        }

        this.pathsMongo = {
            auth: '/login',
            usuarios: '/usuarios',
            heroes: '/heroes',
            peliculas: '/peliculas',
            castingPelicula: '/casting',
            imagenes: '/imagenes',
            imgHeroe: '/imgHeroe',
            imgPeliculas: '/imgPeliculas'
        }



        /*
        this.app.get('/', function (req, res) {
            res.send('Hola Mundo a todos...')
        })
        */

        //Aqui me conecto a la BD
        //this.dbConnection();
        this.dbConnection();

        //Middlewares
        this.middlewares();


        //Routes
        this.routes();

    }

    //async dbConnection() {
        //try {
            //await bdmysql.authenticate();
            //console.log('Connection OK a MySQL.');
        //} catch (error) {
            //console.error('No se pudo Conectar a la BD MySQL', error);
       // }
    //}

    async dbConnection() {
        try {
            await dbConnection();
            console.log('Connection OK a Mongo.');
        } catch (error) {
            console.error('No se pudo Conectar a la BD Mongo', error);
        }
    }

    routes() {
        // Rutas para MySQL
        this.app.use(this.pathsMySql.auth, require('../routes/MySqlAuth'));
        this.app.use(this.pathsMySql.usuarios, require('../routes/MySqlUsuarios'));
        this.app.use(this.pathsMySql.heroes, require('../routes/MySqlHeroe'));
        this.app.use(this.pathsMySql.peliculas, require("../routes/MySqlPeliculas"));
        this.app.use(this.pathsMySql.castingPelicula, require("../routes/MySqlCastingPelicula"));
        this.app.use(this.pathsMySql.imagenes, require("../routes/MySqlImagenes"));
        this.app.use(this.pathsMySql.imgHeroe, require("../routes/MySqlImgHeroes"));
        this.app.use(this.pathsMySql.imgPeliculas, require("../routes/MySqlImgPeliculas"));
    
        // Rutas para MongoDB
        this.app.use(this.pathsMongo.auth, require('../routes/MongoAuth'));
        this.app.use(this.pathsMongo.usuarios, require('../routes/MongoUsuarios'));
        this.app.use(this.pathsMongo.heroes, require('../routes/MongoHeroe'));
        this.app.use(this.pathsMongo.peliculas, require("../routes/MongoPeliculas"));
        this.app.use(this.pathsMongo.castingPelicula, require("../routes/MongoCastingPeliculas"));
        this.app.use(this.pathsMongo.imagenes, require("../routes/MongoImagenes"));
        this.app.use(this.pathsMongo.imgHeroe, require("../routes/MongoImgHeroes"));
        this.app.use(this.pathsMongo.imgPeliculas, require("../routes/MongoImgPeliculas"));
    }
    
    middlewares() {
        //CORS
        //Evitar errores por Cors Domain Access
        //Usado para evitar errores.
        this.app.use(cors());

        //Lectura y Parseo del body
        //JSON
        /*
        JSON (JavaScript Object Notation) 
        es un formato ligero de intercambio de datos. 
        JSON es de fácil lectura y escritura para los usuarios. 
        JSON es fácil de analizar y generar por parte de las máquinas. 
        JSON se basa en un subconjunto del lenguaje de programación JavaScript, 
        Estándar ECMA-262 3a Edición - Diciembre de 1999.
        */
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));

    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;


