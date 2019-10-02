const express = require("express");
const router = express.Router();
const books = require("../models/books");

router.get("/", (req, res) => {
  const { author, title } = req.query;
  if (author) {
    res.send(books.filteredBooks("author", author));
  }
  if (title) {
    res.send(books.filteredBooks("title", title));
  }
  res.send(books.getAllBooks());
});
router.get("/:id", (req, res) => {
  const book = books.getBookById(Number(req.params.id));
  res.send(book);
});
router.post("/new", (req, res) => {
  const newBook = req.body;
  books.addNewBook(newBook);
  res.send(newBook);
});

module.exports = router;
