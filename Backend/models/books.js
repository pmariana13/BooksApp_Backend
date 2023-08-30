const { Schema, model } = require('mongoose');

const booksSchema = new Schema({
   name: {
        type: Schema.Types.String,
        required: [true, "El nombre del libro es obligatorio"]
    },
    author: {
        type: Schema.Types.String,
        required: [true, "El autor es obligatorio"]
    },
    
    genre: {
        type: Schema.Types.String,
        required: [true, "El genero es obligatorio"]
    },
    img: {
        type: Schema.Types.String
    },

    idUser:{
        type:  Schema.Types.ObjectId,
        ref: 'User'
    },
    estado: {
        type: Schema.Types.Boolean,
        default: true
    }

});

const Book = model('Book', booksSchema);

module.exports = Book;