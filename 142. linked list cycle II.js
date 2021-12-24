var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let slow = head.next,
    fast = head.next.next;
  while (fast && fast.next && fast !== slow) {
    fast = fast.next.next;
    slow = slow.next;
  }
  if (!fast || !fast.next) return null;
  // when fast === slow, it proves there is a cycle
  slow = head;
  // now we detect the entrance of the cycle x = (n-1)(y+z) + z
  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

// this one is much better
var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let slow = head.next,
    fast = head.next.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      slow = head;
      while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
