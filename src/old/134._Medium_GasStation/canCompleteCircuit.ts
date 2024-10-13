/*
export function canCompleteCircuit(gas: number[], cost: number[]): number {
    // calculate differences between gas a cost arrays
    let differencesArrayIndexesTupple: [number, number][] = gas.map(
        (gasAmount, i) => [i, gasAmount - cost[i]]
    )

    console.log(differencesArrayIndexesTupple)

    // We have more probability to have a solution starting from the biggest difference,
    // so, order the indexes buys descendent biggest differences of gas and costs, we need a copy to not loose original
    const sortedDifferencesArrayIndexesTupple = [
        ...differencesArrayIndexesTupple,
    ].sort((a, b) => b[1] - a[1])

    // outer loop to calculate gas in in each station starting from each of the indexes in the sorted array
    let currentGas: number = 0
    let index: number
    let differencesArrayIndexesTuppleCopy: [number, number][]
    let sum: number
    let result: number = -1

    for (let differenceIndexTuple of sortedDifferencesArrayIndexesTupple) {
        index = differenceIndexTuple[0]

        console.log("index", index)
        // rotate array the index times to the left to get this arrayDifference as a starting point in the index 0, to make the next loop
        differencesArrayIndexesTuppleCopy = [...differencesArrayIndexesTupple]

        arrayRotateLeft(differencesArrayIndexesTuppleCopy, index)

        console.log(differencesArrayIndexesTuppleCopy)

        // loop to calculate the gas having the previous index as the starting point
        sum = 0
        for (let i = 0; i < differencesArrayIndexesTuppleCopy.length; i++) {
            sum = sum + differencesArrayIndexesTuppleCopy[i][1]
            console.log(sum)
            if (sum <= 0 && i < differencesArrayIndexesTuppleCopy.length - 1) {
                // and car is not at the last station
                // car gets without gas before ending circuit, break inner loop
                console.log("inner break")
                break
            }
            if (
                sum >= 0 &&
                i === differencesArrayIndexesTuppleCopy.length - 1
                // in the last station gas must be positive or zero (just the enough to arrive, ending the gas in moment of arriving),
                // it means it will finish the circuit
            ) {
                // car was able to finish circuit
                result = index
                console.log("index finished", index)
            }
        }
        if (result > -1) {
            // break outter loop
            break
        }
    }

    // if no solution, return -1
    return result
}

export function arrayRotateLeft(arr: any[], count: number) {
    const len = arr.length
    const effectiveCount = ((count % len) + len) % len // Calculate effective count for left rotation
    arr.push(...arr.splice(0, effectiveCount)) // Rotate array to the left
    return arr
}
*/

// This solution, according to chatGPT has a complexity of  O(n log n + n^2)

// -------------------------------------------------------------------------------------

// Better solution from chatgpt, with O(n) complexity:

export function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalGas = 0 // Total balance of gas
    let currentGas = 0 // Current balance of gas for this segment
    let startStation = 0 // Starting station index

    for (let i = 0; i < gas.length; i++) {
        const balance = gas[i] - cost[i]
        totalGas += balance
        currentGas += balance

        // If at any point the current gas becomes negative, it means starting from
        // the current start station won't allow us to reach this station.
        // So we move the start station to the next one.
        if (currentGas < 0) {
            startStation = i + 1
            currentGas = 0 // Reset the current gas balance
        }
    }

    // If the total gas is greater than or equal to the total cost, we can complete the circuit.
    // Otherwise, return -1.
    return totalGas >= 0 ? startStation : -1
}
