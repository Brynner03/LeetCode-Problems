/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0 // Left Pointer
    let right = 1 // Right Pointer
    let maxProfit = 0
    
    while (right < prices.length) {
        if(prices[left] < prices[right] ){
            let profit = prices[right] - prices[left]
            maxProfit = Math.max(maxProfit, profit)
        } else {
            left = right
        }
        right += 1
    }
    
    return maxProfit
    
};