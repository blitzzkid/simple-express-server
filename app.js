const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  next();
};
app.use(middleware);

app.use(express.json());

const index = require("./routes/index");
app.use("/", index);

const Library = require("./routes/books");
app.use("/books", Library);

const Writer = require("./routes/authors");
app.use("/authors", Writer);

module.exports = app;
