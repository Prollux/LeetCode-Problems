/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const comparison = new Set();
    nums.forEach(num => {
        comparison.add(num);
    });
    return !(nums.length === comparison.size)
};