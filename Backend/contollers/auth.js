const bcryptjs = require("bcryptjs");
const { generarJWT } = require('../middlewares/jwt');
const User = require('../models/usuarios');

const login = async (req, res) => {
    const { correo, password } = req.body

    try {
        const usuario = await User.findOne({ email:correo });
        if (!usuario) {
            return res.status(401).json({
                mng: "El correo no es correcto",
            });
        }
        if (!usuario.estado) {
            return res.status(400).json({
                mng: "El usuario esta inactivo",
            });

        }
        //verificamos el password

        const validPassword = bcryptjs.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                mng: "El Password es incorrecto",
            });
        }

        //generamos el JWT
        const token = await generarJWT(usuario.id);
        res.json({
            usuario,
            token,
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports = login;