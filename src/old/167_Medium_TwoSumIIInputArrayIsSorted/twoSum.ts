// two pointer solution - pointers moving from opposite directions
export function twoSum(numbers: number[], target: number): number[] {
    let left: number = 0
    let right: number = numbers.length - 1
    let sum: number = 0

    while (left < right) {
        sum = numbers[left] + numbers[right]
        console.log(sum)
        if (sum === target) {
            return [left + 1, right + 1] // it says the array is 1-indexed, it means it starts in index 1, that s why we need to add 1 to both indexes
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
    return []
}
