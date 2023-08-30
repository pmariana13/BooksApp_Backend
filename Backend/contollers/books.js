
const Book = require("../models/books");

const booksGet = async (req, res) => {
    const books = await Book.find()

    res.json({
        msg: "Libros de la base de datos",
        books

    })
}
const booksPut = async (req, res) => {
    const { id } = req.params;
    const { _id, name, author, genre, ...resto } = req.body;

    const books = await User.findByIdAndUpdate(id, { $set: { resto, name: name, author: author, genre: genre } });

    res.json({
        msg: "El libro se actualizo correctamente",
        books

    })

}

const booksPost = async (req, res) => {
    const { name, author, genre } = req.body;
    const newBook = new Book({ name, author, genre })

    await newBook.save();

    res.json({
        msg: "Libro agregado con exito ",
        newBook
    })
}

const booksDelete = async (req, res) => {
    const { id } = req.params;
    const books = await User.findByIdAndUpdate(id, { estado: false });

    res.json({
        msg: "Libro eliminado con exito",
        books,
    })
}

module.exports = {
    booksGet,
    booksPut,
    booksPost,
    booksDelete
}