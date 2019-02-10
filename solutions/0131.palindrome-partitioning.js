/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const result = [];

  partitionAt(s, 0, "", result);

  return result;
};

const partitionAt = function(s, offset, prefix, result) {
  if (s.length <= offset) {
    result.push(prefix.split(",").slice(1));
    return;
  }

  for (let i = offset; i < s.length; i++) {
    if (isPalindrome(s, offset, i)) {
      const substr = s.substring(offset, i + 1);
      partitionAt(s, i + 1, prefix + "," + substr, result);
    }
  }
};

const isPalindrome = function(s, start, end) {
  while (start < end) {
    if (s.charAt(start++) !== s.charAt(end--)) {
      return false;
    }
  }

  return true;
};
