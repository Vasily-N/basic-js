const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 const getDNSStats = domains => domains.reduce((result, domain) =>
  domain.split('.').reverse()
    .map((sum => v => sum += `.${v}`)(""))
    .reduce((result, c) =>
      { return {...result, [c]: (result[c] || 0) + 1}; }, result)
, {});

module.exports = {
  getDNSStats
};
