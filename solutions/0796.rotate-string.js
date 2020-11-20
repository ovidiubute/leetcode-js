/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A === "" && B === "") {
    return true;
  }

  if (A.length !== B.length) {
    return false;
  }

  let i = 0;
  while (i < A.length) {
    if (A === B) {
      return true;
    }

    A = A.slice(1) + A[0];

    i++;
  }

  return false;
};
