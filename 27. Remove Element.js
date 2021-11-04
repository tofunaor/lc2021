// two pointers
// 27 remove elements
var removeElement = (num, val) => {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k++] = nums[i];
    }
  }
  return k;
};
