// backward filling can reduce space complexity
var replaceSpace = function (s) {
  const strArr = Array.from(s);
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      count++;
    }
  }
  let left = strArr.length - 1,
    right = strArr.length - 1 + count * 2;
  while (left >= 0) {
    if (strArr[left] === " ") {
      strArr[right--] = "0";
      strArr[right--] = "2";
      strArr[right--] = "%";
      left--;
    } else {
      strArr[right--] = strArr[left--];
    }
  }
  return strArr.join("");
};
