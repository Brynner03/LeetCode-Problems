/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    if(!head) return null
    if(!head.next) return null
    
    let fast = head
    let slow = head
    
    let pointer = head
    
    // To figure where fast and slow are going to intersect
    while (fast && fast.next) {
        fast = fast.next.next // Incrememnt by 2
        slow = slow.next
        
        if(fast === slow) break
    }
    
    // Means that there's no cycle
    if (fast !== slow) return null
    
    // To check the cycle
    while (pointer !== slow) {
        pointer = pointer.next
        slow = slow.next
    }
    return slow
};