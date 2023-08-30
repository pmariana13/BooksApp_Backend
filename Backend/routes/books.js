
const { Router } = require('express');

const {

    booksGet,
    booksPut,
    booksPost,
    booksDelete
} = require ('../contollers/books');
const {
    validarJWT
} = require('../middlewares/validator');

const router = Router();

router.get('/', validarJWT, booksGet);

router.put('/:id',validarJWT, booksPut);

router.post('/',validarJWT, booksPost);

router.delete('/:id',validarJWT, booksDelete);


module.exports = router;