/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = 0;
    
  s.split('').map((letter, i) => {
    for (let j = i+1; j <= s.length; j++) {
      let currentString = s.substring(i, j)
        if (currentString.length > longest) {
          longest = currentString.length;
        }
        if (currentString.includes(s[j])) {
            debugger;
          break;
        }
    }
 })
 return longest;
};