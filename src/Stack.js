class Stack {
  constructor(...data) {
    this.data = data;
  }

  pop() {
    return this.data.pop();
  }

  push(item) {
    this.data.push(item);
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

module.exports = Stack;
