
const User = require("../models/usuarios");
const bcryptjs = require('bcryptjs');

const usuarioGet = async (req, res) => {
    try {
        const usuarios = await User.find();
        res.status(200).json({
            msg: "Usuarios de la BD",
            usuarios
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Error en el procesamiento de la solicitud' })
    }
}

const usuarioPut = async (req, res) => {
    const { id } = req.params;
    const { _id, name, lastname, email, password, ...resto } = req.body;

    if (password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }
    const usuarios = await User.findByIdAndUpdate(id, { $set: { resto, nombre: nombre, apellido: apellido, correo: correo } });

    res.json({
        msg: "Usuario actualizado exitosamente",
        usuarios

    })
}

const usuarioPost = async (req, res) => {
    const { name, lastname, email, password } = req.body;
    const newUser = new User({ name, lastname, email, password })
    const salt = bcryptjs.genSaltSync();
    newUser.password = bcryptjs.hashSync(password, salt);

    await newUser.save();

    res.json({
        msg: "Usuario agregado a la base de datos correctamente",
        newUser
    })
}

const usuarioDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarios = await User.findByIdAndUpdate(id, { estado: false });

        res.status(200).json({
            msg: "Usuario eliminado exitosamente",
            usuarios,
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Error en el procesamiento de la solicitud' })
    }

}

module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete
}