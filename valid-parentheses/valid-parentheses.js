/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let key = {
        '{': '}',
        '[': ']',
        '(': ')',
    }
    let expected = []
    let i = 0
    for (let i = 0; i < s.length; i++) {
        if (key[ s[i] ]) {
            expected.push(key[ s[i] ])
        } else {
            if (expected.slice(-1).pop() === s[i]) {
                expected.pop()
            } else {
                return false
            }
        }
    }
    return (expected.length === 0)
};