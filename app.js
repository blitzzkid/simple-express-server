const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  next();
};
app.use(middleware);

app.use(express.json());

const index = require("./routes/index");
app.use("/", index);

const books = require("./routes/books");
app.use("/books", books);

module.exports = app;
