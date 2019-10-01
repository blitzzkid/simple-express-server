class Library {
  constructor() {
    this.books = [
        { id: 1, title: "Introduction to DevOps", author: "Carl" },
        { id: 2, title: "Introduction to baking", author: "Yun" },
        { id: 3, title: "Introduction to architecture", author: "LiShan" },
        { id: 4, title: "How to cook Nasi Padang", author: "Syafi" },
        { id: 5, title: "How to take photos", author: "Ashley" }
      ]
  }
  getAllBooks() {
    return this.books
  }
  getBookById(id) {
    return this.books.find(book => book.id === id)
  }
  addNewBook(book) {
    return this.books.push(book)
  }
}

module.exports = new Library();
