/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let sum = 0;

  const map = {};
  map[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map[sum - k]) {
      count += map[sum - k];
    }

    if (!map[sum]) {
      map[sum] = 1;
    } else {
      map[sum]++;
    }
  }

  return count;
};
