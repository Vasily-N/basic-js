const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
const sortByHeight = arr => {
  const indexes = arr.reduce((p, c, i) => (c == -1) ? [...p, i] : p, []);
  const sorted = arr.filter(v => v != -1).sort((a, b) => a - b);
  indexes.forEach(v => sorted.splice(v, 0, -1));
  return sorted;
}

module.exports = {
  sortByHeight
};
