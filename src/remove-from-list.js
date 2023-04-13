const { ListNode } = require("../extensions/list-node.js");

function removeKFromList(l, k) {
  if (!l || !k) {
    return null;
  }

  if (l.value == k) {
    return l.next ? removeKFromList(l.next, k) : null;
  } else {
    l.next = removeKFromList(l.next, k);
  }

  return l;
}

module.exports = {
  removeKFromList,
};
