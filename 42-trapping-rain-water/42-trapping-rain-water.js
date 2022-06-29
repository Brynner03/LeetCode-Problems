/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    // 1. Identify Pointer with lesser value
    // 2. Is this pointer value greater than or equal to the max on that side
    // Yes? Update the max.
    // No? Get the water for that pointer, add it to the total.
    // 3. Move Pointer Inward
    // 4. Repeat for ther other pointer
    
    let left = 0
    let right = height.length-1
    let maxLeft = 0
    let maxRight = 0
    let total = 0
    
    while (left < right) {
        if (height[left] <= height[right]){
            if (height[left] >= maxLeft) {
                maxLeft = height[left]
            } else {
                total += maxLeft - height[left]
            }
            left++
        } else {
            if(height[right] >= maxRight) {
                maxRight = height[right]
            } else {
                total += maxRight - height[right]
            }
            right--
        }
    }
    
    return total
    
};