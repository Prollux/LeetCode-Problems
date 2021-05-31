/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = ''
    
    let palindromeFinder = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        return s.substring(left+1, right)
    }
    
    for (let i = 0; i < s.length; i++) {
        var found = ''
        let foundOdd = palindromeFinder(i, i)
        let foundEven = palindromeFinder(i-1, i)
        
        if (foundOdd.length > result.length) {
            result = foundOdd
        }
        if (foundEven.length > result.length) {
            result = foundEven
        }
    }
    return result
};