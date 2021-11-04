// two pointers
var removeNthFromEnd = function (head, n) {
  let ret = new ListNode(0, head);
  slow = fast = ret;
  while (n--) fast = fast.next;
  if (!fast) return ret.next;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return ret.next;
};
 