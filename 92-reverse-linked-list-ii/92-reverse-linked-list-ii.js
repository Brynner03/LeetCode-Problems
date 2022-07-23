/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // SPACE: 0(1)
    // TIME: 0(N)
    let currentNode = head
    let currentPosition = 1
    let start = head
    
    while (currentPosition < left) {
        start = currentNode
        currentNode = currentNode.next
        currentPosition++
    }
    let newList = null
    let tail = currentNode
    while (currentPosition >=left && currentPosition <= right) {
        const next = currentNode.next
        currentNode.next = newList
        newList = currentNode
        currentNode = next
        currentPosition++
    }
    
    start.next = newList
    tail.next = currentNode
    
    if (left > 1) {
        return head
    } else {
        return newList
    }
    
};