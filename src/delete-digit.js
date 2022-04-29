const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
const deleteDigit = n => 
  (s => Math.max(...Array.from({length: s.length}).map((_, i) => s.slice(0, i) + s.slice(i + 1))))
  ("" + n);

module.exports = {
  deleteDigit
};