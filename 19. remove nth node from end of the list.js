var removeNthFromEnd = function (head, n) {
  let ret = new ListNode(0, head);
  let slow = (fast = ret);
  while (n-- && fast !== null) fast = fast.next;
  fast = fast.next;
  if (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return ret.next;
};
