/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
   let queue1 =  []
   let  queue2 = []
   queue1.push(p)
   queue2.push(q)
    
    while (queue1.length > 0) {
        let node1 = queue1.shift() || {}
        let node2 = queue2.shift() || {}
        if (node1.val != node2.val) {
            return false
        }
        if (typeof node1.val === 'number') {
            queue1.push(node1.left, node1.right)
            queue2.push(node2.left, node2.right)        
        }
    }
    return true
    //create a queue for both trees
    //start at top node of each tree
    //check to see if node1 and node2 have the same left and right branches (exist and same vals)
};