const sum = require("./index");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("it should fail as expected", () => {
  expect(sum(1, 2)).toBe(5);
});
