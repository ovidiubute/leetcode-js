/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums.length) {
    return 0;
  }

  var i = 0;
  for (var j = 1; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};
