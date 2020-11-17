/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const memo = {};

  let helper = function (start) {
    if (start === s.length) {
      return true;
    }

    if (memo[start] !== undefined) {
      return memo[start];
    }

    for (let end = start + 1; end <= s.length; end++) {
      const slice = s.slice(start, end);
      if (wordDict.includes(slice) && helper(end)) {
        memo[start] = true;
        return true;
      }
    }

    memo[start] = false;
    return false;
  };

  return helper(0);
};
