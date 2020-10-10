/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  if (strs.length === 1) {
    return strs[0];
  }

  prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    prefix = commonPrefix(prefix, strs[i]);
  }

  return prefix;
};

var commonPrefix = function (prefix, str) {
  let p = prefix;
  while (p !== "") {
    if (str.startsWith(p)) {
      return p;
    }

    p = p.substr(0, p.length - 1);
  }

  return p;
};
