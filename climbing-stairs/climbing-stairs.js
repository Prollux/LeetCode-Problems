/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, map) {
    let result = 0;
    let memo = map || new Map();
    if (n == 0) {
        return 1
    }
    if (memo[n]) {
        debugger;
        return memo[n]
    }
    for (let j = 1; j <= 2; j++) {
            if (n-j > -1) {
                memo[n-j] = climbStairs(n-j, memo)
                result += memo[n-j]
            }
        }
    return result;
};