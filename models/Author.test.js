const Writer = require("./Author");

describe("Testing of Author functionalities", () => {
  it("[Get All Authors] should return a list of all the authors", () => {
    expect(Writer.getAllAuthors()).toEqual([
      { id: 1, title: "Introduction to DevOps", author: "Carl" },
      { id: 2, title: "Introduction to baking", author: "Yun" },
      { id: 3, title: "Introduction to architecture", author: "LiShan" }
    ]);
  });
  it("[Get Author by id] should return the authors found by id", () => {
    expect(Writer.getAuthorById(1)).toEqual({
      id: 1,
      title: "Introduction to DevOps",
      author: "Carl"
    });
  });
});
