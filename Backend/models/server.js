
const express = require ('express');

const cors = require('cors');

const dbConnection = require ('../database/database');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.booksPath = "/api/books";
        this.usuarioPath = "/api/usuarios";
        this.authPath = "/api/auth";

        this.middlewares();

        //Mis rutas
        this.routes();

        //Inicio la base de datos
        this.conectarDB();

    }
    async conectarDB (){
        await dbConnection();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.booksPath, require ("../routes/books"));
        this.app.use(this.usuarioPath, require ("../routes/usuarios"));
        this.app.use(this.authPath, require ("../routes/auth"));
    };

    Listen() {

        this.app.listen (this.port, () => {
            console.log ("Servidor corriendo en puerto", this.port);
        });
    }
}

module.exports = Server;






