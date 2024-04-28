
const { Router } = require('express');
const { check} = require('express-validator')

const Role = require('../models/MongoRole')

const {validarCampos} = require('../middlewares/validar-campos')
const {validarJWT} = require('../middlewares/validar-jwt')


const { esRoleValido, existeEmail, existeUsuarioPorId } = require('../helpers/db-validators');
 
const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete} = require('../controllers/MongoUsuarios');

const router = Router();


router.get('/',[
    validarJWT, //Midlleware para el Tokens
    validarCampos
],
usuariosGet );

router.put('/:id',[
    validarJWT, //Midlleware para el Tokens
    check('id','No es un Id Valido...').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    //check('rol').custom(esRoleValido),
    validarCampos
],usuariosPut );

router.post('/',[
 //validarJWT, //Midlleware para el Tokens
 check('nombre','El nombre es obligatorio').not().isEmpty(),
 check('password','El password debe de ser mas de 6 letras').isLength({min:6}),
 check('correo','El correo no es valido').isEmail(),
 //check('rol','No es un rol valido').isIn('ADMIN_ROLE','USER_ROLE'),
 /*
 check('rol').custom( async (rol = '') => {
    const existeRol = await Role.findOne({ rol});
    if (!existeRol){   
        throw new Error(`El rol ${ rol} no existe en la Base de Datos...`);
    }
 }),
 */
 check('rol').custom(esRoleValido),
 check('correo').custom(existeEmail),
 validarCampos
]
,usuariosPost );

router.delete('/:id',[
    validarJWT, //Midlleware para el Tokens    
    check('id','No es un Id Valido...').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], usuariosDelete );


//router.patch('/', usuariosPatch );


module.exports = router;