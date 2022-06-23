/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let currentTarget = target - nums[i];
        for (let n = i+1; n < nums.length; n++) {
            const num = nums[n];
            if (currentTarget === num) {
                return [i, n]
            }
        }
    }
    return [];
};