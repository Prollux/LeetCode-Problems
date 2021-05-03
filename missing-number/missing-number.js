/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let actual = 0;
    let expected = nums.length;
    for (let i = 0; i < nums.length; i++) {
        actual += nums[i]
        expected += i
    }
    return expected - actual
};