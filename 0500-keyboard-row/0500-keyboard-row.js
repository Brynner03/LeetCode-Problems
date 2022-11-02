/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {

    return words.filter((word) => {
        if (
            !/^[qwertyuiop]*$/i.test(word) &&
            !/^[asdfghjkl]*$/i.test(word) &&
            !/^[zxcvbnm]*$/i.test(word)
        ) {
            return false
        } else {
            return true
        }
    })
    
};