/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let pointers = []
    let current = head
        
    while (current) {
        let ref = current
        pointers.push(ref)
        current = current.next
    }
    let target = pointers.length - n;
    let prev = pointers[target-1] ? pointers[target-1] : null
    let next = pointers[target+1] ? pointers[target+1] : null
    !prev ? head = next : prev.next = next
    
    return head
};