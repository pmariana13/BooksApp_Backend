const jwt = require("jsonwebtoken");

const generarJWT = (uid = "") => {
    return new Promise((res, rej) => {

        const payload = { uid };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: "5h" },

            (err, token) => {
                if (err) {
                    console.log(err);
                    rej("no se puede generar el token");
                } else {
                    res(token);
                }}
        );
    });


};
module.exports = {generarJWT};