const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth = (arr, depth = 1) => 
    arr.reduce((p, c) => Array.isArray(c) 
      ? Math.max(this.calculateDepth(c, depth + 1), p)
      : p , depth);
}

module.exports = {
  DepthCalculator
};