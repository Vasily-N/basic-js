const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const transform = arr => {
  if(!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
  return arr.reduce((p, c, i) => {
    if (c == "--discard-prev") {
      if (p[i - 2] != "--discard-next")
        p.pop(); 
    } else
    if(c == "--double-prev") {
      if (p.length > 0 && p[i - 2] != "--discard-next")
        p.push(p[p.length - 1]);
    } else
    if (p[i - 1] == "--double-next") {
      p = [...p, c, c];
    } else
    if (p[i - 1] != "--discard-next") {
      p.push(c);
    }
    return p;
  }, []).filter(v => v != "--discard-next" && v != "--double-next");
}

module.exports = {
  transform
};
