/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0
        let end = n
        let midpoint = start + Math.ceil((end - start) / 2)
        
        while (midpoint > start) {
            if (!isBadVersion(midpoint)) {
                start = midpoint++
                midpoint = start + Math.ceil((end - start) / 2)
            } else {
                if (midpoint-1 === start && !isBadVersion(midpoint-1)) {
                    return midpoint
                }
                end = midpoint--
                midpoint = start + Math.ceil((end - start) / 2)
            }
        }
        return ++midpoint
    }
};