// 209. minimum size subarray sum.js

var minSubArrayLen = function (target, nums) {
  const len = nums.length;
  let l = (s = sum = 0),
    res = len + 1; // len of sub, initial value

  while (r < len) {
    sum += nums[r++];
    while (sum >= target) {
      res = res < r - l ? res : r - l;
      sum -= nums[l++];
    }
  }
  return res > len ? 0 : res;
};
