var removeDuplicates = function (s) {
  const stack = [];
  for (const x of s) {
    if (stack.length && stack[stack.length - 1] === x) {
      stack.pop();
    } else {
      stack.push(x);
    }
  }
  return stack.join("");
};
