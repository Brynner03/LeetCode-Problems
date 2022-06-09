/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
 const sortedSquares = new Array(nums.length).fill(0);

  for(let i = 0 ; i < nums.length; i++) {
    const value = nums[i]
    sortedSquares[i] = value * value 
  }
  sortedSquares.sort((a,b) => a - b)
  return sortedSquares
  
}
