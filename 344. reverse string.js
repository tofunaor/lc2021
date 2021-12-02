// in place reverse
var reverseString = function (s) {
  return s.reverse();
};

// no build-in
// swap
var reverseString1 = function (s) {
  let r = s.length,
    l = -1;
  while (++l < --r) [s[r], s[l]] = [s[l], s[r]];
  return s;
};
