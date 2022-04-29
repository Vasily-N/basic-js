const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
const getCommonCharacterCount = (s1, s2) => {
  const countChars = s => 
    [...s].reduce((p, c) => {
      p[c] = (p[c] || 0) + 1;
      return p;
    },{});

  const s1c = countChars(s1);
  const s2c = countChars(s2);

  let count = 0;
  for(let i in s2c) {
    count += Math.min((s1c[i] || 0), s2c[i]);
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
