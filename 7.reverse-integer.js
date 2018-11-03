/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let temp = Math.abs(x);
  let rev = 0;

  while (temp !== 0) {
    let c = temp % 10;
    rev = rev * 10 + c;
    temp = Math.floor(temp / 10);
  }

  if (rev > Math.pow(2, 31)) {
    return 0;
  }

  if (x < 0) {
    return 0 - rev;
  }

  return rev;
};
