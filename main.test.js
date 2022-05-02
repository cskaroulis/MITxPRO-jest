// import { greet } from "./main.js";
const greet = require("./main.js");

describe("Greet function", () => {
  it("should say hello", () => {
    expect(greet("Colleen")).toBe("Hello Colleen");
  });
  it("should handle null values", () => {
    expect(greet(null)).toBe("Hello there!");
  });
  it("should handle shouting", () => {
    expect(greet("COLLEEN")).toBe("HELLO COLLEEN");
  });
  it("should handle two names", () => {
    expect(greet(["Jose", "Pep"])).toBe("Hello, Jose, Pep");
  });
  it("should handle multiple names", () => {
    expect(greet(["Alex, Arsene, Jose, Zidane"])).toBe(
      "Hello, Alex, Arsene, Jose, Zidane"
    );
  });
});
