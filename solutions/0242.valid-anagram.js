/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let x = s.split("");
  x.sort();

  let y = t.split("");
  y.sort();

  return x.join("") === y.join("");
};
