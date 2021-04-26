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
var addTwoNumbers = function(l1, l2) {
    
    const toArray = (list) => {
        let numArr = [];
        let currentNode = list;
        console.log(list);
        while (list) {
            numArr.push(list.val)
            list = list.next;
        }
        return numArr
    }
    
    let arr1 = toArray(l1);
    let arr2 = toArray(l2);
    
    const totalArr = [];
    let index = 0;
    let overflow = 0;
    
    while (index < arr1.length || index < arr2.length) {
        let num1 = arr1[index] || 0;
        let num2 = arr2[index] || 0;
        
        let total = num1 + num2 + overflow;

        totalArr.push(total % 10);
        overflow = (total - (total % 10)) / 10;
        index++;
    }
    if (overflow) {
        totalArr.push(overflow)
    }

    let newList = {
        val: null,
        next: null,
    };

    let currentNode = newList;

    for (let i = 0; i < totalArr.length;  i++) {
        currentNode.val = totalArr[i];
        if (i !== totalArr.length -1) {
          currentNode.next = {
              val: null,
              next: null,
          }
        } else {
            currentNode.next = null;
        }
        currentNode = currentNode.next;
    }
    return newList;
};