
const { validationResult } = require('express-validator')
const User = require('../models/usuarios');
const jwt = require ('jsonwebtoken');

const validarCampos = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

const emailExiste = async (correo) => {

    const usuario = await User.findOne({ correo });
    if (usuario) {
        throw new Error("El correo electronico ya esta registrado")
    }
}

const registroUsuarioPorId = async (id) => {
    const usuario = await User.findById(id);
    if (!usuario) {
        throw new Error("El usuario no existe")
    }
    return usuario;
};


const validarJWT = async (req,res,next) => {

    const token = req.header('x-token');
    if(!token) {
        return res.status(401).json({message: "No se ha enviado el token"});
    }
    try {
        const {uid}= jwt.verify (token, process.env.JWT_SECRET)

        const usuario = await User.findById(uid);
        if (!usuario) {
            return res.status(401).json({message: "El usuario no existe en la base de datos"});
        }

        //Verifico si el usuario esta activo
        if (!usuario.estado) {
            return res.status(401).json({message: "El usuario no esta activo"});
        }
        req.usuario = usuario;
        next();
    } 
    catch (error) {
        return res.status(401).json({message: "El token no es valido"});
    }
}

module.exports = {
    validarCampos,
    emailExiste,
    registroUsuarioPorId,
    validarJWT
}