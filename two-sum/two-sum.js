/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let firstNum = nums[i];
        for (let j = 0; j < nums.length; j++) {
            let secondNum = nums[j];
            if (firstNum + secondNum === target && i != j) {
                return [i, j];
            }
        }
    }
    return null;
};