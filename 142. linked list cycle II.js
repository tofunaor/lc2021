var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let slow = head.next,
    fast = head.next.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) {
      slow = head;
      while (fast !== slow) {
        // ???
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
};
