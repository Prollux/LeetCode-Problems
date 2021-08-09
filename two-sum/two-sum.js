/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const visited = {}
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        let match = target - current
        
        if (visited[match] != undefined && visited[match] != i) {
            return [i, visited[match]]
        }
        visited[current] = i
    }
    return []
};
