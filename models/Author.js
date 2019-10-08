const Book = require("./Book");

class Author {
  constructor() {
    this.authors = [
      { id: 1, title: "Introduction to DevOps", author: "Carl" },
      { id: 2, title: "Introduction to baking", author: "Yun" },
      { id: 3, title: "Introduction to architecture", author: "LiShan" }
    ];
  }
  getAllAuthors() {
    return this.authors;
  }
  getAuthorById(id) {
    return this.authors.find(author => author.id === id);
  }
  getAllBooksByAuthor(id) {
    const author = this.getAuthorById(id);
    return Book.filteredBooks(author);
  }
}

module.exports = new Author();
