// routes/booksRoutes.js

const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/books', booksController.getAllBooks);
router.get('/books/categories/:categories', booksController.getBooksByCategories);

module.exports = router;