class Library {
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
  filteredBooks(key, query) {
    return this.books.filter(book => {
      return book[key].includes(query);
    });
  }
}

module.exports = new Library();
