export function removeElement(nums: number[], val: number): number {
    console.log(nums)

    /**
    This doesn't work cause filter creates new array and doesn't change initial one
    
    let a = nums.filter((num) => num === val)
    */

    /* Option A - 2 cycles - since the rest of the nums array doesn't matter,
    we don't need to delete the entries from the end not relevant - runtime 104ms */
    /*
    let filteredNums: number[] = nums.filter((num) => num !== val)

    for (let i = 0; i < filteredNums.length; i++) {
        nums[i] = filteredNums[i]
    }

    return filteredNums.length
    */

    /* Option B - only 1 cycle - runtime 88ms */
    let removedCount: number = 0
    const numsInitialLength = nums.length

    for (let i = 0; i < numsInitialLength; i++) {
        if (nums[i - removedCount] === val) {
            nums.splice(i - removedCount, 1)
            removedCount++
        }
    }

    return nums.length
}
