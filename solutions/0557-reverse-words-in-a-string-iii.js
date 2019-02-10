/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var reverseWord = function(w) {
    const chars = w.split("");
    let start = 0;
    let end = chars.length;
    while (end >= start) {
      let swap = chars[start];
      chars[start] = chars[end];
      chars[end] = swap;

      end--;
      start++;
    }

    return chars.join("");
  };

  return s
    .split(" ")
    .map(reverseWord)
    .join(" ");
};
