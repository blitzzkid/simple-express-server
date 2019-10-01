const request = require("supertest");
const app = require("./app");

describe("test", () => {
  it("GET should return the status code 200", () => {
    return request(app)
      .get("/books")
      .expect(200);
  });
});
