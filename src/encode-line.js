const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

 const encodeLineRegEx = str => 
  (str.match(/(.)\1*/g) || []).reduce((p,c) => p + (c.length > 1 ? c.length : "") + c[0], "");

const encodeLineArr = str => 
[...str].reduce((p, c) => { 
  if(p.length && p[p.length - 1][1] === c)
    p[p.length - 1][0]++;
  else 
    p.push([1, c]);
  return p;
},[]).reduce((p,c) => p + (c[0] > 1 ? c[0] : "") + c[1], "");


const encodeLine = encodeLineRegEx

module.exports = {
  encodeLine
};
