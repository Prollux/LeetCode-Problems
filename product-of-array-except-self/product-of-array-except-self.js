/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zeros = 0;
    let base = 1;
    nums.forEach(num => {
        if (num) {
            base *= num;
        } else {
            zeros++
        }
    }) 
    return nums.map(num => {
        if (zeros > 1 || (num && zeros)) {
        return 0
        }                  
        if (num && !zeros) {
        return (base / num ? base / num : Math.abs(base / num))
        }
        if (!num && zeros < 2)
            return base
        })
    }