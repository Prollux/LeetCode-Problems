/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let results = []
    nums.sort((a, b) => a - b)
    let findPair = (num1, current) => {
        let start = current+1
        let end = nums.length-1
        while (start < end) {
            let num2 = nums[start]
            let num3 = nums[end]
            let total = num1 + num2 + num3
            let permstr = `${num1},${num2},${num3}`
            if (total === 0 && !visited[permstr]) {
                result.push([num1, num2, num3])
                visited[permstr] = 1
                start++
            }
            else if (total > 0) {
                prev = nums[end]
                end--
            } else {
                prev = nums
                start++
            }
        }
    }
    const result = []
    let visited = {}
    nums.forEach((num, index) => {
        if (!visited[num]) {   
            findPair(num, index)
        }
        visited[num] = 1
    })
    return result
};
