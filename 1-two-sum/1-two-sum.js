/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const prevs = new Map();
    for (const index in nums) {
        const currentTarget = target - nums[index];
        const match = prevs.get(currentTarget);
        if (match !== undefined) {
            return [index, match]
        }
        prevs.set(nums[index], index)
    }
    return [];
};