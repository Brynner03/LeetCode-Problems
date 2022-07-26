/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
   
    const indexToFind = nums.length - k
    quickSelect(nums, 0, nums.length-1, indexToFind)
    return nums[indexToFind]
}
    
    const quickSelect = function(nums, left, right, idxToFind) {
        
        // Time Complexity
        // Best: 0(N)
        // Worst: 0(N^2)
        
        // Space Complexity
        // 0(1)
        
        if(left < right){
            const partitionIdx = partition(nums, left, right)
            if(partitionIdx === idxToFind) {
                return nums[partitionIdx]
            } else if (idxToFind < partitionIdx) {
                return quickSelect(nums,left,partitionIdx - 1, idxToFind)
            } else {
                return quickSelect(nums,partitionIdx+1,right,idxToFind)
            }
        }
    }
    
    const partition = function(nums, left, right) {
        
        // 0(N)
        
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

