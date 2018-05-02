class Stack {
  constructor(...data) {
    this.data = data;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Cannot pop from an empty stack");
    }
    return this.data.pop();
  }

  push(item) {
    this.data.push(item);
  }
}

module.exports = Stack;
