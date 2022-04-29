const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

const repeatString = (str, separator, repeatTimes) => 
  Array.from({length: Math.max(repeatTimes || 1, 1)}, (_) => str).join(separator);

const repeater = (str, options) =>
  repeatString(str + ((typeof options.addition == 'undefined') ? ""
      : repeatString(options.addition + "", options.additionSeparator || '|',  options.additionRepeatTimes)),
  options.separator || '+', options.repeatTimes);

module.exports = {
  repeater
};
