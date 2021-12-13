var removeElement = (nums, val) => {
  let k = 0; // slow pointer
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }
  return k;
};
