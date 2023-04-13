const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data == data) {
        return node;
      }

      if (data < node.data) {
        node.leftChild = add(node.leftChild, data);
      } else {
        node.rightChild = add(node.rightChild, data);
      }

      return node;
    }
  }

  has(data) {
    function findNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data == data) {
        return true;
      }

      if (data < node.data) {
        return findNode(node.leftChild, data);
      } else {
        return findNode(node.rightChild, data);
      }
    }

    return findNode(this.rootNode, data);
  }

  find(data) {}

  remove(data) {}

  min() {}

  max() {}
}

module.exports = {
  BinarySearchTree,
};
