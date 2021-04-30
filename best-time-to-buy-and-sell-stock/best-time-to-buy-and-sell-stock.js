/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let lowest = null;
    prices.map((cost, index) => {
        if (lowest === null || cost < lowest) {
            lowest = cost;
            for (let i = index; i < prices.length; i++) {
                let cost = prices[i]
                let profit = cost - lowest;
                if (profit > maxProfit) {
                    maxProfit = profit
                }
                if (cost < lowest) {
                    break;
                }
            }
         }
    })
    return maxProfit
}