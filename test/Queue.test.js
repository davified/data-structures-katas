const Queue = require("../src/Queue");
describe("Queue", () => {
  it("should enqueue item", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(3);
    queue.enqueue(2);
    expect(queue).toEqual(new Queue(1, 3, 2));
  });

  it("should dequeue 1 item", () => {
    const queue = new Queue();
    queue.enqueue(1);
    const item = queue.dequeue();
    expect(item).toEqual(1);
    expect(queue).toEqual(new Queue());
  });

  it("should dequeue 1 item when the queue has 2 items", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    const item1 = queue.dequeue();
    const item2 = queue.dequeue();
    expect(item1).toEqual(1);
    expect(item2).toEqual(2);
  });

  it("kitchen sink tests", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    const item1 = queue.dequeue();
    queue.enqueue(10);
    queue.enqueue(11);
    const item2 = queue.dequeue();
    queue.enqueue(100);
    const item3 = queue.dequeue();
    const item4 = queue.dequeue();
    const item5 = queue.dequeue();

    expect(item1).toEqual(1);
    expect(item2).toEqual(2);
    expect(item3).toEqual(10);
    expect(item4).toEqual(11);
    expect(item5).toEqual(100);
  });
});
