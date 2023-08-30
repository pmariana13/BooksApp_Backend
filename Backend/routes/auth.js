const { Router } = require('express');
const { check } = require('express-validator');
const login = require('../contollers/auth');
const {
    validarCampos
} = require('../middlewares/validator');
const router = Router();
router.post("/login", [
    check("correo", "El correo es obligatorio").isEmail(),
    check("password", "La contraseÑa es obligatoria").not().isEmpty(),
    validarCampos], login);

module.exports = router;