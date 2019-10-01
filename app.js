const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Visit the books again"));
app.get("/books", (req, res) => res.send("Getting a book"));
app.post("/books", (req, res) => res.send("Posting a new book"));

module.exports = app;
