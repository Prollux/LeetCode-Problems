/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = nums.length
    nums.forEach((num, index) => {
        if (num === val) {
            nums[index] = null
            k--
        }
    })
    let pointer = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === null) {
            for (let k = i+1; k < nums.length; k++) {
                if (nums[k] !== null) {
                    nums[i] = nums[k]
                    nums[k] = null
                    break;
                }    
            }  
        }
    }
    return k
};