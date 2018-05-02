const Stack = require("./Stack");
class Queue {
  constructor(...data) {
    this.incoming = new Stack(...data);
    this.outgoing = new Stack();
  }

  enqueue(item) {
    this.incoming.push(item);
  }

  dequeue() {
    if (this.outgoing.isEmpty()) {
      while (!this.incoming.isEmpty()) {
        const popped = this.incoming.pop();
        this.outgoing.push(popped);
      }
    }
    return this.outgoing.pop();
  }
}

module.exports = Queue;
