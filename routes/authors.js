const express = require("express");
const router = express.Router();
const Author = require("../models/Author");

router.get("/", (req, res) => {
  res.send(Author.getAllAuthors());
});
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.send(Author.getAuthorById(id));
});

router.get("/:id/books", (req, res) => {
  const id = Number(req.params.id);
  res.send(Author.getAllBooksByAuthor(id));
});

module.exports = router;
