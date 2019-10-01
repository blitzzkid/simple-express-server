const request = require("supertest");
const app = require("../app");
const Library = require("../models/books");

describe("A simple Express server", () => {
  it("[GET] /books should return all books", () => {
    return request(app)
      .get("/books")
      .expect(200)
      .expect(Library.getAllBooks());
  });
  it("[GET] /books should return book with id 2", () => {
    return request(app)
      .get("/books/2")
      .expect(200)
      .expect(Library.getBookById(2));
  });
  it("[POST] /new should return the status code 200", () => {
    const newBook = { id: 6, title: "How to take photos", author: "Ashley" };
    return request(app)
      .post("/books/new")
      .send(newBook)
      .expect(200)
      .expect({ id: 6, title: "How to take photos", author: "Ashley" });
  });
});
