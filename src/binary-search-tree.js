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
        node.leftChild = addNode(node.leftChild, data);
      } else {
        node.rightChild = addNode(node.rightChild, data);
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

  find(data) {
    function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data == data) {
        return node;
      }

      if (data < node.data) {
        return findNode(node.leftChild, data);
      } else {
        return findNode(node.rightChild, data);
      }
    }

    return findNode(this.rootNode, data);
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.leftChild = removeNode(node.leftChild, data);
        return node;
      } else if (data > node.data) {
        node.rightChild = removeNode(node.rightChild, data);
        return node;
      } else {
        if (!node.leftChild && !node.rightChild) {
          return null;
        }

        if (!node.rightChild) {
          node = node.leftChild;
          return node;
        }

        if (!node.leftChild) {
          node = node.rightChild;
          return node;
        }

        let minRightChild = node.rightChild;

        while (minRightChild.leftChild) {
          minRightChild = minRightChild.leftChild;
        }

        node.data = minRightChild.data;
        node.rightChild = removeNode(node.rightChild, minRightChild.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let minNode = this.rootNode;
    while (minNode.leftChild) {
      minNode = minNode.leftChild;
    }

    return minNode.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let maxNode = this.rootNode;
    while (maxNode.rightChild) {
      maxNode = maxNode.rightChild;
    }

    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
