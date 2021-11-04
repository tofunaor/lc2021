//203.remove linked list elements.js

var removeElements = function (head, val) {
  const ret = new ListNode(0, head); // dummy head
  let cur = ret;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return ret.next;
};
