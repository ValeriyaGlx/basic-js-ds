const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this.list; 
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.list === undefined) this.list = node;
    else {
      let currentValue = this.list;
      while (currentValue.next !== null) {
        currentValue = currentValue.next;
    }
    currentValue.next = new ListNode(value);
    }
    return this;
  }

  dequeue() {
    const deletedValue = this.list.value;
    this.list = this.list.next;
    return deletedValue;
  }
}

module.exports = {
  Queue
};
