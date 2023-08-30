
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: [true, "El nombre es obligatorio"]
    },
    lastname: {
        type: Schema.Types.String,
        required: [true, "Los apellidos son obligatorios"]
    },
    email: {
        type: Schema.Types.String,
        required: [true, "El correo es obligatorio"]
    },
    password: {
        type: Schema.Types.String,
        required: [true, "La contraseña es obligatoria"]
    },
    estado: {
        type: Schema.Types.Boolean,
        default: true
    }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;