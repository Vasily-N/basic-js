const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
const getMatrixElementsSum = matrix =>
  matrix.reduce((p, c, i, a) => p + 
    ((i == 0) ? c.reduce((p, c) => p + c) 
        : c.reduce((p, c, j) =>
          (a[i - 1][j] != 0) ? p + c : p, 0)
    ), 0);


module.exports = {
  getMatrixElementsSum
};
