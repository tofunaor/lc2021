var maxSlidingWindow = function (nums, k) {
  const q = [];
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
    if (q[0] <= i - k) {
      q.shift();
    }
    if (i >= k - 1) ans.push(nums[q[0]]);
  }
  return ans;
};
