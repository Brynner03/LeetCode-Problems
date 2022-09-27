/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let sum = nums.reduce((prev, curr) => prev + curr)
    let leftSum = 0
    
    for (let i = 0; i <nums.length; i++) {
        let rightSum = sum - nums[i] - leftSum
        if (leftSum === rightSum) return i
        leftSum += nums[i]
    }
    return -1
};