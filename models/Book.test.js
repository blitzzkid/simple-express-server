const Library = require("./Book");

describe("Testing of functionalities", () => {
  it("[All Books] return all books when getAllBooks method is used", () => {
    expect(Library.getAllBooks()).toEqual([
      { id: 1, title: "Introduction to DevOps", author: "Carl" },
      { id: 2, title: "Introduction to baking", author: "Yun" },
      { id: 3, title: "Introduction to architecture", author: "LiShan" },
      { id: 4, title: "How to cook Nasi Padang", author: "Syafi" },
      { id: 5, title: "How to take photos", author: "Ashley" }
    ]);
  });
  it("[Book by Id] return the correct book when getBookById method is used", () => {
    expect(Library.getBookById(2)).toEqual({
      id: 2,
      title: "Introduction to baking",
      author: "Yun"
    });
  });
  it("[Filter Books 1 query] return the correct book when filteredBook method is used", () => {
    expect(Library.filteredBooks({ author: "Carl" })).toEqual([
      {
        id: 1,
        title: "Introduction to DevOps",
        author: "Carl"
      }
    ]);
  });

  it("[Filter Books 2 queries] return the correct books when filteredBook method is used", () => {
    expect(Library.filteredBooks({ author: "Carl", title: "DevOps" })).toEqual([
      {
        id: 1,
        title: "Introduction to DevOps",
        author: "Carl"
      }
    ]);
  });
  it("[Filter Books lowercase] return the correct book when a lowercase query is passed to the filteredBooks", () => {
    expect(Library.filteredBooks({ author: "carl" })).toEqual([
      {
        id: 1,
        title: "Introduction to DevOps",
        author: "Carl"
      }
    ]);
  });
  it("[Add new Book] return the correct book when addNewBook method is used", () => {
    Library.addNewBook({
      id: 6,
      title: "How to write clean code",
      author: "Elson"
    });
    expect(Library.getAllBooks()).toEqual([
      { id: 1, title: "Introduction to DevOps", author: "Carl" },
      { id: 2, title: "Introduction to baking", author: "Yun" },
      { id: 3, title: "Introduction to architecture", author: "LiShan" },
      { id: 4, title: "How to cook Nasi Padang", author: "Syafi" },
      { id: 5, title: "How to take photos", author: "Ashley" },
      { id: 6, title: "How to write clean code", author: "Elson" }
    ]);
  });
  it("[Update Book] return the correct book when addNewBook method is used", () => {
    const id = 6;
    const editedBook = {
      id: 6,
      title: "How to write better clean code",
      author: "Elson"
    };
    Library.updateBook(id, editedBook);
    expect(Library.getBookById(6)).toEqual({
      id: 6,
      title: "How to write better clean code",
      author: "Elson"
    });
  });
  it("[Update non-existing Book] Does not return the correct book when addNewBook method is used", () => {
    const id = 10;
    const editedBook = {
      id: 10,
      title: "How to write better clean code",
      author: "Elson"
    };
    expect(() => Library.updateBook(id, editedBook)).toThrow();
  });
  it("[Delete Book] return the correct books when removeBook method is used", () => {
    const id = 1;
    expect(Library.removeBook(id)).toEqual([
      { id: 2, title: "Introduction to baking", author: "Yun" },
      { id: 3, title: "Introduction to architecture", author: "LiShan" },
      { id: 4, title: "How to cook Nasi Padang", author: "Syafi" },
      { id: 5, title: "How to take photos", author: "Ashley" },
      { id: 6, title: "How to write better clean code", author: "Elson" }
    ]);
  });
});
