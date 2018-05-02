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
}

module.exports = Stack;
