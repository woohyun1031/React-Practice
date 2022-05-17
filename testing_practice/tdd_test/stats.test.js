const stats = require("./stats");

describe("stats_test", () => {
  it("get maximum value", () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });
  it("get minimum value", () => {
    expect(stats.min([1, 2, 3, 4])).toBe(1);
  });
  it("get average value", () => {
    expect(stats.avg([1, 2, 3, 4, 5])).toBe(3);
  });
});
