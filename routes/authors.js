const express = require("express");
const router = express.Router();
const Writer = require("../models/Author");

router.get("/", (req, res) => {
  res.send(Writer.getAllAuthors());
});
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.send(Writer.getAuthorById(id));
});

module.exports = router;
