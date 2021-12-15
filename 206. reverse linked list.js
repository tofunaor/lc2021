// two pointers
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let temp = null,
    pre = null,
    cur = head;
  while (cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};

// recursion
var reverse = function (pre, head) {
  if (!head) return pre;
  const temp = head.next;
  head.next = pre;
  pre = head;
  return reverse(pre, temp);
};

var reverseList = function (head) {
  return reverse(null, head);
};

// recursion ??
var reverse = function (head) {
  if (!head || !head.next) return head;
  const pre = reverse(head.next);
  head.next = pre.next;
  pre.next = head;
  return head;
};

var reverseList = function (head) {
  let cur = head;
  while (cur && cur.next) cur = cur.next;
  reverse(head);
  return cur;
};
