/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
    let newArr = []
    let runner = 0
    
    for (let i = 0; i < nums.length; i++) {
        runner += nums[i]
        newArr.push(runner)
    }
    return newArr
};