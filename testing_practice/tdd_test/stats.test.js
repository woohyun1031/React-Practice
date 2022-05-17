const stats = require("./stats");

describe("stats_test", () => {
  it("get maximum value", () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });
});
