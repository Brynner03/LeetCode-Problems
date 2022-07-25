/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let numerals = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    
    let res = 0
    
    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length &&  numerals[s[i]] < numerals[s[i + 1]]) {
            res -= numerals[s[i]]
        } else {
            res += numerals[s[i]]
        }
    }
    return res
    
};