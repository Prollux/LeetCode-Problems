/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let currentTarget = target - nums[i];
        let match = nums.indexOf(currentTarget)
        if (match > -1 && match !== i) {
            result = [i, match]
            break;
        }
    }
    return result
};