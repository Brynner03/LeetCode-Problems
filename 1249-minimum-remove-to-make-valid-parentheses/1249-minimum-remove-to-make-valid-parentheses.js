/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    
    const res = s.split("")
    const stack = []
    
    for(let i = 0; i < s.length; i++) {
        if(res[i] === '(') {
            stack.push(i)
        } else if (res[i] === ")" && stack.length) {
            stack.pop()
        } else if (res[i] === ")") {
            res[i] = ""
        }
    }
    
    while(stack.length) {
        const currIdx = stack.pop()
        res[currIdx] = ""
    }
    return res.join("")
    
};