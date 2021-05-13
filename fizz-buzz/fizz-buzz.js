/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        let mod3 = i % 3, mod5 = i % 5, value = ''
        if (!mod3) {
            value += 'Fizz'
        }
        if (!mod5) {
            value += 'Buzz'
        }
        if (value === '') {
            value += `${i}`
        }
        result[i-1] = value
    }
    return result
};