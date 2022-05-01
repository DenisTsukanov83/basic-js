const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let x;
  let y;
  let count = 0;
  if (s1.length <= s2.length) {
  y = s1.split('');
  x = s2.split(''); 
  }
  else {
  x = s1.split('');
  y = s2.split(''); 
  }
      for(let i = 0; i < x.length; i++) {
          for(let j = 0; j < y.length; j++) {
          if(x[i] === y[j]){
          y.splice(j, 1, ' ');
          count++;
          j = 0;
          i++;
      }
    } 
  }
  return count;
}
module.exports = {
  getCommonCharacterCount
};
