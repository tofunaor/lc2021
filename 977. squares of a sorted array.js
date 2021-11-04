// 977. squares of a sorted array.js

const sortedSquares = function (nums) {
  let res = [];
  for (let i = 0, j = nums.length - 1; i <= j;) {
    const left = Math.abs(nums[i]);
    const right = Math.abs(nums[j]);
    if (right > left) {
      res.unshift(right * right);
      j--;
    } else {
      res.unshift(left * left);
      i++;
    }
  }
  return res;
};
