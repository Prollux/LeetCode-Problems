/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let results = nums.map((val, index) => {
        let result = 1;
        for (let i = 0; i < nums.length; i++) {
            if (i != index) {
                result *= nums[i];
            }
        }
        return result;
    })
    return results
};