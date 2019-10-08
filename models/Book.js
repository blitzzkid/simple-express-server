class Book {
  constructor() {
    this.books = [
      { id: 1, title: "Introduction to DevOps", author: "Carl" },
      { id: 2, title: "Introduction to baking", author: "Yun" },
      { id: 3, title: "Introduction to architecture", author: "LiShan" },
      { id: 4, title: "How to cook Nasi Padang", author: "Syafi" },
      { id: 5, title: "How to take photos", author: "Ashley" }
    ];
  }
  getAllBooks() {
    return this.books;
  }
  getBookById(id) {
    return this.books.find(book => book.id === id);
  }
  addNewBook(book) {
    this.books.push(book);
  }
  filteredBooks(query) {
    const keys = Object.keys(query);

    return this.books.filter(book => {
      return keys.every(key => {
        const regex = new RegExp(query[key], "gi");
        return book[key].match(regex);
      });
    });
  }
  updateBook(id, updatedBook) {
    const index = this.books.findIndex(book => {
      return book.id === id;
    });
    if (index === -1) {
      throw new Error("This book does not exist");
    }
    this.books[index] = updatedBook;
  }
  removeBook(id) {
    const bookId = this.getBookById(id);
    const index = this.books.indexOf(bookId);
    this.books.splice(index, 1);
    return this.getAllBooks();
  }
}

module.exports = new Book();
