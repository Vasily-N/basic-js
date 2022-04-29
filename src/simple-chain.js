const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = (() => {
  const _chain = [];

  const _deleteChain = () => {
    _chain.splice(0, _chain.length);
  }

  const getLength = () => _chain.length;

  const addLink = function(value) {
    _chain.push(String(value));
    return this;
  }

  const removeLink = function(position) {
    if (!Number.isInteger(position) || position < 1 || position > _chain.length) {
      _deleteChain();
      throw Error("You can't remove incorrect link!");
    }
    _chain.splice(position - 1, 1);
    return this;
  }

  const reverseChain = function() {
    _chain.reverse();
    return this;
  }

  const finishChain = () => {
    const result = `( ${_chain.join(" )~~( ")} )`;
    _deleteChain();
    return result;
  }

  return {
    getLength: getLength,
    addLink: addLink,
    removeLink: removeLink,
    reverseChain: reverseChain,
    finishChain : finishChain,
  }
})();

module.exports = {
  chainMaker
};
