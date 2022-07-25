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
    // Floyd's Hare and Tortoise Algorithm
    
    let hare = head
    let tortoise = head
    
    // Will continue until something in the code tells it to break.
    
    while(true) {
        
        hare = hare.next
        tortoise = tortoise.next
        
        if(hare === null || hare.next === null) {
            return null
        } else {
            // Advance the hare another step
            hare = hare.next
        }
        
        if (tortoise === hare) break
    
    }
    
    let pointer1 = head
    let pointer2 = tortoise
    
    while(pointer1 !== pointer2) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }
    
    return pointer1
    
};