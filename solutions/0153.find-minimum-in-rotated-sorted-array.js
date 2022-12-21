/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const n = nums.length;

  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return nums[0];
  } else if (nums[0] < nums[n - 1]) {
    return nums[0];
  }

  let lo = 0,
    hi = n - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    if (nums[mid] < nums[0]) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
};

const nums = [3, 4, 5, 1, 2];
findMin(nums);
