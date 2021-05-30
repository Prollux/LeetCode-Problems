/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let coinChange = (coins, amount, memo = {}) => {
    if (memo[amount]) return memo[amount]
    if (amount === 0) return 0
    if (amount < 0) return Infinity

    memo[amount] = Infinity

    for (i in coins) {
        let perm = coinChange(coins, amount-coins[i], memo)
        memo[amount] = Math.min(memo[amount], 1 + (perm === -1 ? Infinity: perm))
    }

    return (memo[amount] === Infinity ? -1 : memo[amount])
}