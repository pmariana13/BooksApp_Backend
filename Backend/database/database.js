
const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('Base de datos libros_online');


    } catch (error) {
        console.log(error);

        throw new Error("No se ha podido conectar a la base de datos");

    }
}
module.exports = dbConnection;