/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const nums = [1];

  let ugly,
    i2 = 0,
    i3 = 0,
    i5 = 0;
  for (let i = 1; i < 1691; i++) {
    ugly = Math.min(nums[i2] * 2, nums[i3] * 3, nums[i5] * 5);
    nums[i] = ugly;

    if (ugly === nums[i2] * 2) {
      i2++;
    }
    if (ugly === nums[i3] * 3) {
      i3++;
    }
    if (ugly === nums[i5] * 5) {
      i5++;
    }
  }

  return nums[n - 1];
};
