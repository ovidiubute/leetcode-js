/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const lettersByDigit = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };
  let results = [];

  let combine = function(combination, digits) {
    if (!digits) {
      results.push(combination);
    } else {
      for (letter of lettersByDigit[digits[0]]) {
        combine(combination + letter, digits.slice(1));
      }
    }
  };

  if (digits) {
    combine("", digits);
  }

  return results;
};
