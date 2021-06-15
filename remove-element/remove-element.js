/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = nums.length
    let place = 0
    nums.forEach((num, index) => {
        if (num !== val) {
            nums[place] = num
            place++
        } else {
            k--
        }
    })
    return k
}