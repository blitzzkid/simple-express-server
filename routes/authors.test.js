const request = require("supertest");
const Author = require("../models/Author");
jest.mock("../models/Author.js");
const app = require("../app");

const mockData = [
  { id: 1, title: "Introduction to DevOps", author: "Carl" },
  { id: 2, title: "Introduction to baking", author: "Yun" },
  { id: 3, title: "Introduction to architecture", author: "LiShan" }
];

describe("A simple Express Server of writers", () => {
  it("[GET] /authors should return a list of all the authors", () => {
    Author.getAllAuthors.mockReturnValueOnce(mockData);
    return request(app)
      .get("/authors")
      .expect(200)
      .expect([
        { id: 1, title: "Introduction to DevOps", author: "Carl" },
        { id: 2, title: "Introduction to baking", author: "Yun" },
        { id: 3, title: "Introduction to architecture", author: "LiShan" }
      ]);
  });
  it("[GET] /authors/1 should return an author found by id", () => {
    Author.getAuthorById.mockReturnValueOnce(mockData[0]);
    return request(app)
      .get("/authors/1")
      .expect(200)
      .expect({ id: 1, title: "Introduction to DevOps", author: "Carl" });
  });
});
