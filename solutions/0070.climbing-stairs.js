/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let memo = [];
  return steps(0, n, memo);
};

var steps = function (i, n, memo) {
  if (i > n) return 0;

  if (i === n) return 1;

  if (memo[i] > 0) return memo[i];

  memo[i] = steps(i + 1, n, memo) + steps(i + 2, n, memo);
  return memo[i];
};
