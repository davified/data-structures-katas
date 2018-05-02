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

  it("should be able to indicate whether a stack is empty or not", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
    stack.push(1);
    expect(stack.isEmpty()).toEqual(false);
  });

  it("should throw error when popping from an empty stack", () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow(
      new Error("Cannot pop from an empty stack")
    );
  });
});
