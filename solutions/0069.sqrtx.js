/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {    
  for (let i = 0; i <= x; i++) {
    if (i ** 2 === x) {
      return i;
    } else if (i ** 2 > x) {
      return i > 0 ? i - 1 : 0;
    }
  }
};