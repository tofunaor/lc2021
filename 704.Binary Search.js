// 704 binary search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// [left, right]
var search1 = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else return mid;
  }
  return -1;
};

// [left, right)
var search2 = function (nums, target) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2); // prevent overflow
    if (nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else return mid;
  }
  return -1;
};

// binary search requires 1) an ordered array 2) no duplicates
