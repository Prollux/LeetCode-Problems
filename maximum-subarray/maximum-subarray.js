/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = Number.NEGATIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    
    for (const num of nums) {
        sum = Math.max(sum + num, num)
        max = Math.max(sum, max)
    }
    return max
}