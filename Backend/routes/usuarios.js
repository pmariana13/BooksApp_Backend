
const { Router } = require('express');
const { check } = require('express-validator');

const {
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete

} = require('../contollers/usuarios');

const {
    validarCampos,
    emailExiste,
    registroUsuarioPorId
} = require('../middlewares/validator');



const router = Router();

router.get("/", usuarioGet);

router.put("/:id", [
    check("id", "No es un Id valido").isMongoId(),
    check("id").custom(registroUsuarioPorId), validarCampos], usuarioPut);
 
router.post("/", [check("name", "El nombre es obligatorio").not().isEmpty(),
check("lastname", "El apellido es obligatorio").not().isEmpty(),
check("password", "El password debe tener mas de 8 letras").isLength({ min: 8 }),
check("email", "El correo no es valido").isEmail(),
check("email").custom(emailExiste),
    validarCampos], usuarioPost); 



router.delete("/:id", [
    check("id", "No es un Id valido").isMongoId(),
    check("id").custom(registroUsuarioPorId), validarCampos], usuarioDelete);


module.exports = router;