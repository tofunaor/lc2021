var isHappy = function (n) {
  let set = new Set();
  let totalSum;
  while (totalSum !== 1) {
    let arr = ("" + (totalSum || n)).split("");
    totalSum = arr.reduce((total, num) => {
      return total + num * num;
    }, 0);

    if (set.has(totalSum)) {
      return false;
    }
    set.add(totalSum);
  }
  return true;
};
