/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Time Complexity: 0(N^2)
    // Space Complexity: 0(N)
    let counter = 0
    
    if(s.length <= 1) return s.length;
    
    for (let left = 0; left < s.length; left++) {
        let seenChars = {}, currentLength = 0;
        for (let right = left; right < s.length; right++) {
            const currentChar = s[right]
            if (!seenChars[currentChar]) {
                currentLength++;
                seenChars[currentChar] = true
                counter = Math.max(counter, currentLength)
            } else {
                break;
            }
        }
    }
    return counter
};