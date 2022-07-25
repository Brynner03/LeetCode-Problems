/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
   let set =  {}
   
   for (let i = 0; i < nums.length; i++) {
       let value = nums[i]
       if (value in set) {
           return true
       }
       set[value] = true
   }
    return false
};