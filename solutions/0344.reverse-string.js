/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
  // This is correct, but on large inputs you exceed
  // the maximum call stack size, so it was not accepted.
  // if (s === '') {
  //   return '';
  // }
  // return reverseString(s.substr(1)) + s.charAt(0);

  // Accepted submission, but this is cheating :-)
  // return s
  //   .split("")
  //   .reverse()
  //   .join("");

  // Accepted submission without (too many) JS shenanigans
  var i = 0;
  var j = s.length - 1;
  var mid = s.length % 2 === 1 ? Math.floor(s.length / 2) : s.length / 2 - 1;
  let arr = s.split(""); // Easier to work with char arrays
  while (i <= mid && j >= mid) {
    var swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;

    i++;
    j--;
  }

  return arr.join("");
};
