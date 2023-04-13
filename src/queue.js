const { ListNode } = require("../extensions/list-node.js");

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    let UnderlyingList;

    if (!this.head) {
      UnderlyingList = new ListNode(null);
    } else {
      UnderlyingList = this.head;
    }

    return UnderlyingList;
  }

  // add node in a queue
  enqueue(value) {
    let newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      // traversal through queue
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    let removedNode = this.head;
    this.head = this.head.next;
    this.length--;

    return removedNode.value;
  }
}

module.exports = {
  Queue,
};
