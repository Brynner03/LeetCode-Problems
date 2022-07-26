/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const indexToFind = nums.length - k
    quickSort(nums,0,nums.length-1)
    return nums[indexToFind]
}
    
    const quickSort = function(nums, left, right) {
        if(left < right){
            const partitionIdx = partition(nums, left, right)
            quickSort(nums,left,partitionIdx - 1)
            quickSort(nums,partitionIdx + 1, right)
        }
    }
    
    const partition = function(nums, left, right) {
        const pivotElement = nums[right]
        let partitionIdx = left
        for (let j = left; j < right; j++) {
            if(nums[j] <= pivotElement) {
                swap(nums,partitionIdx, j)
                partitionIdx++
            }
        }
        swap(nums, partitionIdx, right)
        return partitionIdx
    }
    

const swap = function(nums,i,j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

