var intersection = function (nums1, nums2) {
  if (nums1.length < nums2.length) {
    const _ = nums1;
    nums1 = nums2;
    nums2 = _; // 数组长的作为nums1
  }
  const nums1Set = new Set(nums1); // de-dupe
  const resSet = new Set();
  for (let i = nums2.length - 1; i >= 0; i--) {
    nums1Set.has(nums2[i]) && resSet.add(nums2[i]);
  }
  return Array.from(resSet);
};
