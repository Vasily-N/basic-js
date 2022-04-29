const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const minesweeper = matrix => {
  const getValForCell = (matrix, yS, yE, xS, xE) => {
    let sum = 0;
    for (let y = yS; y < yE; y++)
    for (let x = xS; x < xE; x++) 
      if(matrix[y][x]) sum++;
    return sum;
  }

  const result = Array.from({length: matrix.length}, (_, i) => Array.from({length: matrix[i].length}, _ => 0));
  for (let y = 0; y < matrix.length; y++)
  for (let x = 0; x < matrix[y].length; x++) {
    result[y][x] = matrix[y][x] ? 1 : getValForCell(matrix, Math.max(y - 1, 0), Math.min(y + 2, matrix.length), Math.max(x - 1, 0), Math.min(x + 2, matrix[y].length));
  }
  return result;
}

module.exports = {
  minesweeper
};
