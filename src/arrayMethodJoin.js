'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const glue = separator === null ? 'null' : separator;

    for (let i = 0; i < this.length; i++) {
      const currentString = this[i] === null || this[i] === undefined
        ? ''
        : this[i];

      if (i === this.length - 1) {
        return joinedString + currentString;
      }

      joinedString += currentString + glue;
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
