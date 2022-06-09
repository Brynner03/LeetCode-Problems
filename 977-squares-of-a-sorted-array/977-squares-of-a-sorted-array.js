/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  // Create a new Array = array length
  const sortedSquare = new Array(nums.length)
  // Create a variable to track smaller index = 0
  let smallerValueIdx = 0
  // Create a variable to track larger index = last index
  let largerValueIdx = nums.length - 1

  // Loop through the array starting at the end, decrementing.
  for(let idx = nums.length - 1 ; idx >= 0; idx--){
    // Create a variable = array(smaller index)
  const smallerValue = nums[smallerValueIdx]
    // Create a variable = array(larger index)
  const largerValue = nums[largerValueIdx]
  
    // Check if the absolute value of the smaller index is greater than larger
  if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      // if it is set the index of the new array equal to smaller * itself
      // Increment smaller index
    sortedSquare[idx] = smallerValue * smallerValue
    smallerValueIdx++
  } else {
      // Set sortedSquare index = largerValue * itself
      // Decrement largerValueIdx
    sortedSquare[idx] = largerValue * largerValue
    largerValueIdx--
    }
  }
  // Return the new Array
  return sortedSquare
}
