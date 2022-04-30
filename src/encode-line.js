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
function encodeLine(x) {
  let y = x.split('');
  let arr = [];
  let count = 1;
for(let i = 0; i < y.length; i++) {
    if(y[i] === y[i + 1]) {
      count++;
    }
    else {
        if(count > 1) {
          arr.push(`${count}${y[i]}`);
          count = 1; 
        }
        else {
            arr.push(y[i]);
            count = 1;
        }
        
    }
}
return arr.join('') ;
}

module.exports = {
  encodeLine
};
