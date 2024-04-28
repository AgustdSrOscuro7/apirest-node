//const Categoria = require('./categoria');
//const Producto = require('./producto');
const Role = require('./MongoRole');
const Server = require('./server');
const Usuario = require('./MongoUsuario');
const Heroe = require('./MongoHeroes');

//const Referencia = require('./referencia');
//const Multimedia = require('./multimedia');
//const GrupoMultimedia = require('./grupomultimedia');
//const Proveedor = require('./proveedor');
//const Marca = require('./marca');
//const ProveedorMarca = require('./proveedormarca');
//const Option = require('./opcion');
//const Optionrole = require('./opcionesrole');

const HeroeMySQL = require('./MySqlHeroes');
const UsuarioMySQL = require('./MySqlUsuario');

module.exports = {
    //Categoria,
    //Producto,
    Role,
    Server,
    Usuario,
    UsuarioMySQL,
    
    //Referencia,
    //Multimedia,
    //GrupoMultimedia,
    //Proveedor,
    //Marca,
    //ProveedorMarca,
    //Option,
    //Optionrole,
    Heroe,
    HeroeMySQL
}

