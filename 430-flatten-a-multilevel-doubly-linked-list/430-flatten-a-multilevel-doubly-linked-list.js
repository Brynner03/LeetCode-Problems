/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    
    // Space: 0(1)
    // Time: 0(N)
    
    if(!head) return head
    let currentNode = head
    while (currentNode !== null) {
        // Checks if currentNode does not have a child and advances
        if (currentNode.child === null) {
            currentNode = currentNode.next
        } else {
            // If it does, we set the tail to the currentNodes child
            let tail = currentNode.child
            while(tail.next !== null) {
                tail = tail.next
            }
            tail.next = currentNode.next
            if (tail.next !== null) {
                tail.next.prev = tail
            }
            currentNode.next = currentNode.child
            currentNode.next.prev = currentNode
            currentNode.child = null
        }
    }
    return head
};