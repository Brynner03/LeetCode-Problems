/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    
    const seenChars = {}
    let counter = 0, left = 0

    
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right]
        const prevSeenChar = seenChars[currentChar]
        
        if(prevSeenChar >= left) {
            left = prevSeenChar + 1
        }
        
        seenChars[currentChar] = right
        counter = Math.max(counter, right - left + 1)
    }
    return counter
};