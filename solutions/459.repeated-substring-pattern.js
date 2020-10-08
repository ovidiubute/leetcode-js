/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  return (s + s).slice(1).slice(0, -1).indexOf(s) !== -1
};

