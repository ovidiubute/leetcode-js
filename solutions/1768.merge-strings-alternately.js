/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const L1 = word1.length;
  const L2 = word2.length;

  if (L1 === 0 && L2 === 0) {
    return word1;
  } else {
    if (L1 === 0) {
      return word1;
    } else if (L2 === 0) {
      return word2;
    }
  }

  let out = new Array(L1 + L2);
  let i = 0;
  let upper = Math.min(L1, L2);

  while (i < upper) {
    out.push(word1[i]);
    out.push(word2[i]);

    i++;
  }

  if (L1 === L2) {
    return out.join("");
  }

  if (i === L1) {
    out.push(word2.slice(i));
  } else {
    out.push(word1.slice(i));
  }

  return out.join("");
};
