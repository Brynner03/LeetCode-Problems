/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(nums) {
    
   let p1 = 0, p2 = nums.length - 1, maxA = 0
   
   while ( p1 < p2) {
       const height = Math.min(nums[p1], nums[p2])
       const width = p2 - p1
       const area = height * width
       maxA = Math.max(maxA, area)
       
       if(nums[p1] <= nums[p2]) {
           p1++
       } else {
           p2--
       }
       
   }
    return maxA
};