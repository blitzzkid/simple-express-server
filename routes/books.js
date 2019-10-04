const express = require("express");
const router = express.Router();
const Library = require("../models/Book");

router.get("/", (req, res) => {
  if (req.query.title || req.query.author) {
    res.send(Library.filteredBooks(req.query));
  }
  res.send(Library.getAllBooks());
});
router.get("/:id", (req, res) => {
  const book = Library.getBookById(Number(req.params.id));
  res.send(book);
});
router.post("/new", (req, res) => {
  const newBook = req.body;
  Library.addNewBook(newBook);
  res.send(newBook);
});
router.put("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const updatedBook = req.body;
    Library.updateBook(id, updatedBook);
    res.send(updatedBook);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  Library.removeBook(id);
  res.send(Library.getAllBooks());
});

module.exports = router;
