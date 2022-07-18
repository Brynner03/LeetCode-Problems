/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // Time: 0(N)
    // Space: 0(1)
    let prev = null
    let currentNode = head
    
    while (currentNode) {
        let next = currentNode.next
        currentNode.next = prev 
        prev = currentNode
        currentNode = next
    }
    return prev
};