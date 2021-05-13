/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prevSum = 0, highestSum = 0
    for (let i = 0; i < nums.length; i++) {
        const startingSum = highestSum
        highestSum = Math.max(prevSum + nums[i], highestSum)
        prevSum = startingSum
    }
    return highestSum
};