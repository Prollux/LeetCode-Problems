/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let getLowestNode = () => {
        let temp = l1
        if (!l1 && !l2) {
        }
        else if (!l2) {
            l1 = l1.next
        }
        else if (!l1){
            temp = l2
            l2 = l2.next
        }
        else if (l1.val > l2.val) {
            temp = l2
            l2 = l2.next
        }
        else if (l2.val > l1.val) {
            l1 = l1.next
        } else {
        l1 = l1.next
        }
        return temp
    }
    
    let head = getLowestNode(l1, l2)
    
    let current = head
    while (l1 || l2) {
        current.next = getLowestNode()
        current = current.next
    }
    return head
    
};