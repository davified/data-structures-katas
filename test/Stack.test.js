const Stack = require("../src/Stack");

describe("Stack", () => {
  it("should pop item from top of the stack", () => {
    const stack = new Stack(1, 52, 10, 48);
    const actual = stack.pop();
    expect(actual).toEqual(48);
    expect(stack).toEqual(new Stack(1, 52, 10));
  });

  it("should push item onto top of the stack", () => {
    const stack = new Stack(1, 52, 10, 48);
    stack.push(42);
    expect(stack).toEqual(new Stack(1, 52, 10, 48, 42));
  });
});
