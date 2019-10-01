const request = require("supertest");
const app = require("./app");

describe("A simple Express server", () => {
  it("GET / should return the status code 200", () => {
    return request(app)
      .get("/")
      .expect(200)
      .expect("Visit the books again");
  });
});
