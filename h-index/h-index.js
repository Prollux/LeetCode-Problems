/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    //if h of their n papers have >= h citations each
    //AND the other (n - h) papers have <= h citations each
    //then index = h citations
    citations.sort((a, b) => b- a)
    let result = 0;
    let lowestCitation = citations[citations.length-1]
    for (let i = 0; i < citations.length; i++) {
        let citationScore = citations[i]
        let h = i+1
        if (citationScore >= h && (lowestCitation <= h || h === citations.length)) {
           result = h
        }
    }
    return result
};