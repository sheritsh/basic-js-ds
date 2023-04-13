class Stack {
  //make a private field
  #stack = [];

  push(element) {
    return this.#stack.push(element);
  }

  pop() {
    return this.#stack.pop();
  }

  peek() {
    return this.#stack[this.#stack.length - 1];
  }
}

module.exports = {
  Stack,
};
