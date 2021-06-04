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
    let e = []
    let i = 0
    for (let i = 0; i < s.length; i++) {
        if (key[ s[i] ]) {
            e.push(key[ s[i] ])
        } else {
            if (e[e.length-1] === s[i]) {
                e.pop()
            } else {
                return false
            }
        }
    }
    return (e.length === 0)
};