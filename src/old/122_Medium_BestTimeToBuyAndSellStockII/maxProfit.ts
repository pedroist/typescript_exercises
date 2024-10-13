/*
export function maxProfit(prices: number[]): number {
    // fragment the array of length n into an array of n-1 with the differences between days
    let differencesArray: number[] = []

    let priceZeroDays: number[] = []

    for (let i = 0; i < prices.length - 1; i++) {
        differencesArray[i] = prices[i + 1] - prices[i]

        if (prices[i] === 0) {
            priceZeroDays.push(i)
        }
    }
    console.log(differencesArray)

    // If there is only one price, the differencesArray will be empty 0 profit gets return
    if (differencesArray.length === 0) {
        return 0
    }

    // for each of differences, save the indexes of the days to buy and sell
    let isPositiveLastDifference: boolean | undefined = evalNumb(
        differencesArray[0]
    )
    let currentDifferenceEval: boolean | undefined
    let buyDays: number[] = []
    let sellDays: number[] = []

    if (isPositiveLastDifference) {
        // if first difference is positive, buy on the day 1 (index 0)
        buyDays.push(0)
    }

    for (let i = 1; i < differencesArray.length; i++) {
        currentDifferenceEval = evalNumb(differencesArray[i])
        if (currentDifferenceEval !== isPositiveLastDifference) {
            // entering means a change of a peak
            if (
                currentDifferenceEval === false &&
                sellDays.length < buyDays.length
            ) {
                // we should only sell if we bought before
                // Price was going up and now will start going down - Sell
                sellDays.push(i)
            } else if (
                currentDifferenceEval === true &&
                sellDays.length === buyDays.length
            ) {
                // can't buy if I bought first and didn't sell, number must be even
                // Price was going down and now will start going up - Buy
                buyDays.push(i)
            }
            isPositiveLastDifference = currentDifferenceEval
        }
    }

    if (buyDays.length > sellDays.length) {
        // find if is any day price zero after the last buy
        if (priceZeroDays.length > 0) {
            let lastSellDay = priceZeroDays.find(
                (day: number) => day > buyDays[buyDays.length - 1]
            )

            if (lastSellDay) {
                sellDays.push(lastSellDay)
            } else {
                //if we bought, but we never selled, the price always kept going up, then we sell on the last day
                sellDays.push(prices.length - 1)
            }
        } else {
            //if we bought, but we never selled, the price always kept going up, then we sell on the last day
            sellDays.push(prices.length - 1)
        }
    }

    // calculate differences between followed days of buying and sell
    let profitParts: number[] = []

    for (let i = 0; i < sellDays.length; i++) {
        profitParts.push(prices[sellDays[i]] - prices[buyDays[i]])
    }

    // Sum all those differences
    if (buyDays.length === 0 && sellDays.length === 0) {
        return 0
    }

    const totalProfit: number = profitParts.reduce(
        (acc, currentValue) => acc + currentValue,
        0
    )

    return totalProfit
}

export const evalNumb = (value: number): boolean | undefined => {
    if (value > 0) {
        return true
    } else if (value < 0) {
        return false
    } else {
        return undefined
    }
}
*/
// ------------------------------------------------------------------
// The previous solution has time and space complexity O(n) but it could be simplified to the following, by chatGPT:

// mesmo que haja um intervalo maior entre o maior profit, se somarmos o profit de cada dia vai dar o mesmo resultado se so vendesse mais tarde
export function maxProfit(prices: number[]): number {
    let totalProfit = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            totalProfit += prices[i] - prices[i - 1] // Add profit for upward movement
        }
    }

    return totalProfit
}
