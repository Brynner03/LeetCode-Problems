/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    // Do we assume that the array is sorted?
    // Does it matter if it is sorted or not?
    
    // Do I return a list of the new array?
    // Create a new array
    // Loop through the array 
    // Add the previous index to the current index
    // 2 Pointers
    
    let newNums = []
    let currentSum = 0
    
    for (let i = 0; i < nums.length; i++) {
        // Keeping track of the value
        let currentValue = nums[i]
        // Adding value to our sum on every loop
        currentSum += currentValue
        // Adding the current sum to our array
        newNums.push(currentSum)
    }
    return newNums
    
};