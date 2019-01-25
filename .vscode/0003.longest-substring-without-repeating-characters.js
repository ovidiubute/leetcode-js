/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let result = 0;
  let i = 0;
  let j = 0;
  let seen = new Set();

  while (i < s.length && j < s.length) {
    if (!seen.has(s.charAt(j))) {
      seen.add(s.charAt(j++));
      result = Math.max(result, j - i);
    } else {
      seen.delete(s.charAt(i++));
    }
  }

  return result;
};
