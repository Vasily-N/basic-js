const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 const dateSample = sampleActivity => {
  if(typeof sampleActivity !== "string" || isNaN(sampleActivity)) return false 
  const val = parseFloat(sampleActivity);
  if(isNaN(val) || val < 0 || val > MODERN_ACTIVITY) return false;
  const result = Math.ceil(Math.log(MODERN_ACTIVITY / val) * HALF_LIFE_PERIOD / Math.log(2));
  if(isNaN(result) || !isFinite(result)) return false;
  return result;
}

module.exports = {
  dateSample
};