/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let additional = ''
    if (x < 0) {
        additional += '-'
    }
   let result = +(additional + Math.abs(x).toString().split('').reverse().join(''))
   return (result > (Math.pow(2, 31) -1) || result < Math.pow(-2, 31) ? 0 : result)
};