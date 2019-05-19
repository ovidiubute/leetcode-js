/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let i = 0,
    j = 0;
  while (i < name.length) {
    const c = name.charAt(i);
    const d = typed.charAt(j);

    if (c === d) {
      i++;
      j++;
      continue;
    }

    while (j < typed.length) {
      if (c !== typed.charAt(j++)) {
        break;
      }
    }

    if (j === typed.length) {
      return false;
    }
  }

  return true;
};
