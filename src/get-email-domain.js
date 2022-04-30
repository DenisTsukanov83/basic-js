const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(x) {
  let arr = x.split('');
  let arr2 = arr.reverse();
  let y = arr2.indexOf('@');
  let arr3 = arr2.splice(0, y);
    return arr3.reverse().join('');
}

module.exports = {
  getEmailDomain
};
