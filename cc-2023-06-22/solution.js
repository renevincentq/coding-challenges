// // 714. Best Time to Buy and Sell Stock with Transaction Fee
// You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

// Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).



// Example 1:

// Input: prices = [1,3,2,8,4,9], fee = 2
// Output: 8
// Explanation: The maximum profit can be achieved by:
// - Buying at prices[0] = 1
// - Selling at prices[3] = 8
// - Buying at prices[4] = 4
// - Selling at prices[5] = 9
// The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
// Example 2:

// Input: prices = [1,3,7,5,10,3], fee = 3
// Output: 6


// Constraints:

// 1 <= prices.length <= 5 * 104
// 1 <= prices[i] < 5 * 104
// 0 <= fee < 5 * 104

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    // initialize ready to buy state, and ready to sell state for day 1
    // 0 = did not buy or sell, -arr[0] = bought a stock 
    let buy = 0, sell = -prices[0]

    // mathematically can only buy or sell once each iteration, not both
    for (let i = 1; i < prices.length; i++) {
        // take max between current buy and profit from selling
        // previously bought stock at current price
        buy = Math.max(buy, sell + prices[i] - fee)

        // take max between current sell and profit from buying
        // at current price
        sell = Math.max(sell, buy - prices[i])
    }

    // always return state of being ready to buy stock
    return buy
};