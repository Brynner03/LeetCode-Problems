/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = {}
    for ( let p = 0; p < nums.length; p++){
        const mapVal = numsMap[nums[p]]
        if (mapVal >= 0){
            return [mapVal,p]
        } else {
            const numbertoFind = target - nums[p]
            numsMap[numbertoFind] = p
        }
    }
    return null
};