export function twoSum(numbers: number[], target: number): number[] {
    let left: number = 0
    let right: number = numbers.length - 1
    let sum: number = 0

    while (left < right) {
        sum = numbers[left] + numbers[right]
        console.log(sum)
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
    return []
}
