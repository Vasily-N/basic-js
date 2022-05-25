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

 const countChars = s =>
 [...s].reduce((p, c) => {
   return {...p, [c]: (p[c] || 0) + 1};
 },{});

const getCommonCharacterCount = (s1, s2) =>
  ((s1c, s2c) =>
    Object.keys(s2c).reduce((p, c) => p + Math.min((s1c[c] || 0), s2c[c]), 0)
  )(countChars(s1), countChars(s2));

module.exports = {
  getCommonCharacterCount
};
