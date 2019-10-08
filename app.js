const express = require("express");
const app = express();
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/test", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function() {
//   console.log("we are connected!");
// });

const middleware = (req, res, next) => {
  next();
};
app.use(middleware);

app.use(express.json());

const index = require("./routes/index");
app.use("/", index);

const Book = require("./routes/books");
app.use("/books", Book);

const Author = require("./routes/authors");
app.use("/authors", Author);

module.exports = app;
