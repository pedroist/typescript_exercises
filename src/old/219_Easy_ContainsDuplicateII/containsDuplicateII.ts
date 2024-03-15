// Solution 1 - quadratic complexity on last loop
/*
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
    // Create Map with the numbers of the array and the respective array of indexes in which the numbers appear on the initial array
    let myMap: Map<number, number[]> = new Map()
    let currentArray: number[] | undefined
    let result: boolean = false

    for (let i = 0; i < nums.length; i++) {
        if (!myMap.has(nums[i])) {
            myMap.set(nums[i], [i])
        } else {
            currentArray = myMap.get(nums[i])
            if (currentArray) {
                currentArray.push(i)

                myMap.set(nums[i], currentArray)
            }
        }
    }

    // check from each of the elements of the map if the min between indexes is <= k
    for (const entryValues of myMap.values()) {
        console.log(entryValues)
        if (minDifference(entryValues) <= k) {
            result = true
            break
        }
    }

    return result
}

const minDifference = (array: number[]): number => {
    let minDiff: number = Infinity
    let currentDiff: number

    for (let i = 0; i < array.length - 1; i++) {
        currentDiff = array[i + 1] - array[i]

        if (minDiff > currentDiff) {
            minDiff = currentDiff
        }
    }
    return minDiff
}
*/

// Solution 2 - Sliding Window style approach adapted solution - by chatGPT
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
    // Map which will have the value and the last index where it was seen in each place of the loop
    let myMap: Map<number, number> = new Map()

    // Loop that will iterate the array and check if the difference of indexes between the current and last time that value was seen is lower than k

    for (let i = 0; i < nums.length; i++) {
        if (myMap.has(nums[i])) {
            if (i - myMap.get(nums[i])! <= k) {
                return true
            }
        }
        myMap.set(nums[i], i)
    }

    return false
}
