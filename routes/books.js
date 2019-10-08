const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/", (req, res) => {
  if (req.query.title || req.query.author) {
    res.send(Book.filteredBooks(req.query));
  }
  res.send(Book.getAllBooks());
});
router.get("/:id", (req, res) => {
  const book = Book.getBookById(Number(req.params.id));
  res.send(book);
});
router.post("/new", (req, res) => {
  const newBook = req.body;
  Book.addNewBook(newBook);
  res.send(newBook);
});
router.put("/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const updatedBook = req.body;
    Book.updateBook(id, updatedBook);
    res.send(updatedBook);
  } catch (error) {
    error.status = 404;
    next(error);
  }
});
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  Book.removeBook(id);
  res.send(Book.getAllBooks());
});

module.exports = router;
