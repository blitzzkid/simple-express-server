const request = require("supertest");
const Book = require("../models/Book");
jest.mock("../models/Book");
const app = require("../app");

const mockData = [
  { id: 1, title: "Introduction to DevOps", author: "Carl" },
  { id: 2, title: "Introduction to baking", author: "Yun" },
  { id: 3, title: "Introduction to architecture", author: "LiShan" }
];

describe("A simple Express server", () => {
  it("[GET] /books should return all books", () => {
    Book.getAllBooks.mockReturnValueOnce(mockData);
    return request(app)
      .get("/books")
      .expect(200)
      .expect([
        { id: 1, title: "Introduction to DevOps", author: "Carl" },
        { id: 2, title: "Introduction to baking", author: "Yun" },
        { id: 3, title: "Introduction to architecture", author: "LiShan" }
      ]);
  });
  it("[GET] /books should return book with id 2", () => {
    Book.getBookById.mockReturnValueOnce(mockData[1]);
    return request(app)
      .get("/books/2")
      .expect(200)
      .expect({ id: 2, title: "Introduction to baking", author: "Yun" });
  });

  it("[GET] /books?author=Carl ", () => {
    Book.filteredBooks.mockReturnValueOnce([mockData[0]]);
    return request(app)
      .get("/books")
      .query({ author: "Carl" })
      .expect(200)
      .expect([{ id: 1, title: "Introduction to DevOps", author: "Carl" }]);
  });
  it("[GET] /books?author=unknown ", () => {
    Book.filteredBooks.mockReturnValueOnce([]);
    return request(app)
      .get("/books")
      .query({ author: "unknown" })
      .expect(200)
      .expect([]);
  });
  it("[GET] /books?title=baking ", () => {
    Book.filteredBooks.mockReturnValueOnce([mockData[1]]);
    return request(app)
      .get("/books")
      .query({ title: "baking" })
      .expect(200)
      .expect([{ id: 2, title: "Introduction to baking", author: "Yun" }]);
  });
  it("[GET] /books?title=notfound ", () => {
    Book.filteredBooks.mockReturnValueOnce([]);
    return request(app)
      .get("/books")
      .query({ title: "notfound" })
      .expect(200)
      .expect([]);
  });
  it("[GET] /books?author=Carl&title=DevOps ", () => {
    Book.filteredBooks.mockReturnValueOnce([mockData[0]]);
    return request(app)
      .get("/books")
      .query({ author: "Carl" })
      .query({ title: "Introduction to DevOps" })
      .expect(200)
      .expect([{ id: 1, title: "Introduction to DevOps", author: "Carl" }]);
  });
  it("[POST] /new should add a new book", () => {
    const newBook = {
      id: 6,
      title: "How to write clean code",
      author: "Elson"
    };
    return request(app)
      .post("/books/new")
      .send(newBook)
      .expect(200)
      .expect({ id: 6, title: "How to write clean code", author: "Elson" })
      .expect(() => {
        expect(Book.addNewBook).toHaveBeenCalledTimes(1);
      });
  });

  it("[PUT] /books returns 404 when id is not found", () => {
    Book.updateBook.mockImplementationOnce(() => {
      throw new Error();
    });
    return request(app)
      .put("/books/100")
      .expect(404);
  });
  it("[PUT] /books updates the book", () => {
    Book.updateBook.mockReset();
    const updatedBook = {
      id: 6,
      title: "How to write better clean code",
      author: "Elson"
    };
    return request(app)
      .put("/books/6")
      .send(updatedBook)
      .expect(200)
      .expect({
        id: 6,
        title: "How to write better clean code",
        author: "Elson"
      })
      .expect(() => {
        expect(Book.updateBook).toHaveBeenCalledTimes(1);
      });
  });
  it("[DEL] /books deletes a book that is found by the id", () => {
    Book.getAllBooks.mockReturnValueOnce([
      { id: 1, title: "Introduction to DevOps", author: "Carl" },
      { id: 2, title: "Introduction to baking", author: "Yun" },
      { id: 3, title: "Introduction to architecture", author: "LiShan" }
    ]);
    return request(app)
      .del("/books/1")
      .expect(200)
      .expect([
        { id: 1, title: "Introduction to DevOps", author: "Carl" },
        { id: 2, title: "Introduction to baking", author: "Yun" },
        { id: 3, title: "Introduction to architecture", author: "LiShan" }
      ])
      .expect(() => {
        expect(Book.removeBook).toHaveBeenCalledTimes(1);
      });
  });
});
