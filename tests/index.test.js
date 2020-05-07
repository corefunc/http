const {
  httpResponse,
} = require("../dist/http.cjs");

describe("Imported functions", () => {
  it("httpResponse", () => {
    expect(typeof httpResponse).toBe("function");
  });
});

