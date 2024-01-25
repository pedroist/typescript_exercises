export function removeDuplicates(nums: number[]): number {
    const numsCountMap: Map<number, number> = new Map()

    let nextMapEntryCount: number = 0
    let numsIndex: number = 0

    for (let i = 0; i < nums.length; i++) {
        if (!numsCountMap.has(nums[i])) {
            numsCountMap.set(nums[i], 1)

            nums[numsIndex] = nums[i]
            numsIndex++
        } else if ((numsCountMap.get(nums[i]) || 0) < 2) {
            nextMapEntryCount = numsCountMap.get(nums[i]) || 0
            numsCountMap.set(nums[i], nextMapEntryCount + 1)

            nums[numsIndex] = nums[i]
            numsIndex++
        }
    }
    console.log(nums)
    console.log(numsIndex)

    return numsIndex
}
