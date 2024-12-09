// controllers/booksController.js

const books = require('../models/booksModel');

exports.getAllBooks = (req, res) => {
  res.json(books);
};

exports.getBooksByCategories = (req, res) => {
  const categories = req.params.genre;
  const filteredBooks = books.filter(book => book.categories.toLowerCase() === categories.toLowerCase());
  res.json(filteredBooks);
};