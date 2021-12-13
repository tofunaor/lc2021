var reverseString = function (s) {
  return s.reverse();
};
// in-place reverse
var reverseStr = function (s) {
  let l = -1,
    r = s.length;
  while (++l < --r) [s[l], s[r]] = [s[r], s[l]]; // swap
  return s;
};
